import { appendFile, readFile, rename, writeFile } from 'node:fs/promises'
import { closeSync, openSync, readSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const audioRoot = resolve(projectRoot, 'data/audio')
const typeRoot = resolve(audioRoot, 'type-1')
const catalogPath = resolve(typeRoot, 'catalog.json')
const journalPath = resolve(typeRoot, 'download-records.jsonl')

function detectFormat(path) {
  const descriptor = openSync(path, 'r')
  const bytes = Buffer.alloc(12)
  try {
    readSync(descriptor, bytes, 0, bytes.length, 0)
  } finally {
    closeSync(descriptor)
  }

  if (bytes.subarray(0, 3).toString('ascii') === 'ID3') return 'mp3'
  if (bytes[0] === 0xff && (bytes[1] & 0xe0) === 0xe0) return 'mp3'
  if (
    bytes.subarray(0, 4).toString('ascii') === 'RIFF'
    && bytes.subarray(8, 12).toString('ascii') === 'WAVE'
  ) return 'wav'
  return 'unknown'
}

const catalog = JSON.parse(await readFile(catalogPath, 'utf8'))
const latestRecords = new Map()
for (const line of (await readFile(journalPath, 'utf8')).split(/\r?\n/)) {
  if (!line.trim()) continue
  try {
    const record = JSON.parse(line)
    if (record?.key) latestRecords.set(record.key, record)
  } catch {
    // Ignore an interrupted final line; prior records remain authoritative.
  }
}

const corrections = []
let mp3 = 0
let wav = 0
let unknown = 0

for (const entry of catalog.entries) {
  const record = latestRecords.get(entry.key)
  if (!record || record.status !== 'success') continue
  const currentPath = resolve(audioRoot, record.file)
  const format = detectFormat(currentPath)
  if (format === 'mp3') mp3 += 1
  else if (format === 'wav') wav += 1
  else {
    unknown += 1
    continue
  }

  const correctedFile = record.file.replace(/\.(?:mp3|wav)$/i, `.${format}`)
  if (correctedFile !== record.file) {
    await rename(currentPath, resolve(audioRoot, correctedFile))
  }

  if (correctedFile !== record.file || record.format !== format) {
    const correctedRecord = {
      ...record,
      file: correctedFile,
      format,
      normalizedExtension: true,
      updatedAt: new Date().toISOString(),
    }
    latestRecords.set(entry.key, correctedRecord)
    corrections.push(correctedRecord)
  }
}

if (corrections.length) {
  await appendFile(journalPath, `${corrections.map((record) => JSON.stringify(record)).join('\n')}\n`, 'utf8')
}

catalog.entries = catalog.entries.map((entry) => {
  const record = latestRecords.get(entry.key)
  return record?.status === 'success' ? { ...entry, file: record.file } : entry
})
catalog.formats = { mp3, wav, unknown }
await writeFile(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`, 'utf8')

console.log(`Normalized ${corrections.length.toLocaleString()} records. mp3=${mp3} wav=${wav} unknown=${unknown}`)
