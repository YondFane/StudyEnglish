import { createHash } from 'node:crypto'
import { readFile, rename, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dataRoot = resolve(projectRoot, 'data/excel')
const examplesPath = resolve(projectRoot, 'data/examples/examples.jsonl')
const writeChanges = process.argv.includes('--write')

function normalizeTerm(value) {
  return String(value ?? '').trim().toLocaleLowerCase('en-US')
}

function normalizeDefinition(value) {
  return String(value ?? '').trim().replace(/\s+/g, ' ')
}

function exampleId(term, definition) {
  return createHash('sha256')
    .update(`${normalizeTerm(term)}\u0000${normalizeDefinition(definition)}`)
    .digest('hex')
}

async function readLatestExamples() {
  const latest = new Map()
  let lines
  try {
    lines = (await readFile(examplesPath, 'utf8')).split(/\r?\n/)
  } catch (error) {
    if (error.code === 'ENOENT') return latest
    throw error
  }
  for (const line of lines) {
    if (!line.trim()) continue
    try {
      const record = JSON.parse(line)
      if (record?.id && record.status === 'success') latest.set(record.id, record)
    } catch {
      // Ignore an interrupted final append.
    }
  }
  return latest
}

async function writeJsonAtomic(path, value) {
  const temporaryPath = `${path}.examples.tmp`
  await writeFile(temporaryPath, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
  await rename(temporaryPath, path)
}

const manifest = JSON.parse(await readFile(resolve(dataRoot, 'manifest.json'), 'utf8'))
const examples = await readLatestExamples()
let total = 0
let covered = 0
const datasets = []

for (const dataset of manifest.datasets) {
  const datasetPath = resolve(dataRoot, dataset.path.replace(/^\.\//, ''))
  const rows = JSON.parse(await readFile(datasetPath, 'utf8'))
  let datasetCovered = 0
  const updatedRows = rows.map((row) => {
    total += 1
    const example = examples.get(exampleId(row.term, row.definition))
    if (!example) return row
    covered += 1
    datasetCovered += 1
    return {
      ...row,
      exampleSentence: example.exampleSentence,
      exampleTranslation: example.exampleTranslation,
    }
  })

  if (writeChanges && datasetCovered) await writeJsonAtomic(datasetPath, updatedRows)
  datasets.push({
    id: dataset.id,
    total: rows.length,
    covered: datasetCovered,
    missing: rows.length - datasetCovered,
  })
}

console.log(JSON.stringify({
  mode: writeChanges ? 'write' : 'check',
  uniqueExamples: examples.size,
  totalRecords: total,
  coveredRecords: covered,
  missingRecords: total - covered,
  coveragePercent: Number(((covered / Math.max(total, 1)) * 100).toFixed(2)),
  datasets,
}, null, 2))

if (!writeChanges) console.log('No files were changed. Add --write to merge available examples into datasets.')
