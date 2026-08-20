import { createHash } from 'node:crypto'
import { appendFile, mkdir, readFile, rename, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dataRoot = resolve(projectRoot, 'data/excel')
const examplesRoot = resolve(projectRoot, 'data/examples')
const catalogPath = resolve(examplesRoot, 'catalog.json')
const examplesPath = resolve(examplesRoot, 'examples.jsonl')
const journalPath = resolve(examplesRoot, 'generation-records.jsonl')
const progressPath = resolve(examplesRoot, 'progress.json')
const errorLogPath = resolve(examplesRoot, 'generation-error.log')
const tatoebaIndexPath = resolve(examplesRoot, 'sources/indexes/tatoeba-index.json')
const wordnetIndexPath = resolve(examplesRoot, 'sources/indexes/wordnet-index.json')

async function loadEnvironmentFile(path) {
  try {
    const lines = (await readFile(path, 'utf8')).split(/\r?\n/)
    for (const line of lines) {
      const match = line.match(/^\s*([A-Z][A-Z0-9_]*)\s*=\s*(.*?)\s*$/)
      if (!match || process.env[match[1]]) continue
      const value = match[2].replace(/^(?:"(.*)"|'(.*)')$/, (_, doubleQuoted, singleQuoted) =>
        doubleQuoted ?? singleQuoted ?? '',
      )
      process.env[match[1]] = value
    }
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
}

await loadEnvironmentFile(resolve(projectRoot, '.env.local'))

const prepareOnly = process.argv.includes('--prepare')
const onlyFailed = process.argv.includes('--only-failed')
const force = process.argv.includes('--force')
const provider = readArgument('provider', process.env.EXAMPLE_AI_PROVIDER || 'ollama').toLowerCase()
const termFilter = normalizeTerm(readArgument('term', ''))
const limit = Math.max(0, Number(readArgument('limit', '0')))
const defaultBatchSize = provider === 'ollama' ? '5' : '20'
const batchSize = Math.min(50, Math.max(1, Number(readArgument('batch-size', defaultBatchSize))))
const concurrency = Math.min(4, Math.max(1, Number(readArgument('concurrency', process.env.EXAMPLE_AI_CONCURRENCY || '1'))))
const maxAttempts = Math.max(1, Number(readArgument('max-attempts', '3')))
const defaultRequestInterval = provider === 'ollama' ? '0' : '600'
const requestIntervalMs = Math.max(0, Number(readArgument('request-interval', defaultRequestInterval)))
const defaultModel = provider === 'ollama' ? 'qwen3:8b' : 'gpt-5.4-mini'
const model = readArgument('model', process.env.EXAMPLE_AI_MODEL || defaultModel)
const openAiBaseUrl = String(process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1').replace(/\/$/, '')
const ollamaBaseUrl = String(process.env.OLLAMA_BASE_URL || 'http://127.0.0.1:11434').replace(/\/$/, '')
const apiKey = process.env.OPENAI_API_KEY
const requestTimeoutMs = Math.max(10_000, Number(readArgument('timeout', provider === 'ollama' ? '180000' : '120000')))
const ollamaNumCtx = Math.max(2048, Number(process.env.OLLAMA_NUM_CTX || '4096'))
const ollamaKeepAlive = process.env.OLLAMA_KEEP_ALIVE || '15m'
const reviewEnabled = process.env.EXAMPLE_AI_REVIEW !== 'false' && !process.argv.includes('--no-review')
const thinkForUndefined = process.env.OLLAMA_THINK_FOR_UNDEFINED === 'true'

if (!['ollama', 'openai'].includes(provider)) {
  throw new Error(`Unsupported EXAMPLE_AI_PROVIDER: ${provider}. Use "ollama" or "openai".`)
}

function readArgument(name, fallback) {
  const prefix = `--${name}=`
  for (let index = process.argv.length - 1; index >= 0; index -= 1) {
    const argument = process.argv[index]
    if (argument.startsWith(prefix)) return argument.slice(prefix.length)
  }
  return fallback
}

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

async function readJson(path, fallback) {
  try {
    return JSON.parse(await readFile(path, 'utf8'))
  } catch (error) {
    if (error.code === 'ENOENT') return fallback
    throw error
  }
}

async function writeJsonAtomic(path, value) {
  const temporaryPath = `${path}.tmp`
  await writeFile(temporaryPath, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
  await rename(temporaryPath, path)
}

async function readLatestJsonl(path, keyField = 'id') {
  const latest = new Map()
  try {
    const lines = (await readFile(path, 'utf8')).split(/\r?\n/)
    for (const line of lines) {
      if (!line.trim()) continue
      try {
        const record = JSON.parse(line)
        if (record?.[keyField]) latest.set(record[keyField], record)
      } catch {
        // Ignore an interrupted final append and keep all earlier valid records.
      }
    }
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
  return latest
}

async function readSourceIndex(path) {
  const data = await readJson(path, { entries: {} })
  return new Map(Object.entries(data.entries || {}))
}

async function collectCatalog() {
  const manifest = JSON.parse(await readFile(resolve(dataRoot, 'manifest.json'), 'utf8'))
  const entries = new Map()

  for (const dataset of manifest.datasets) {
    if (!['vocabulary', 'phrase', 'course'].includes(dataset.type)) continue
    const datasetPath = resolve(dataRoot, dataset.path.replace(/^\.\//, ''))
    const rows = JSON.parse(await readFile(datasetPath, 'utf8'))

    for (const row of rows) {
      const term = String(row.term ?? '').trim()
      const definition = normalizeDefinition(row.definition)
      if (!term || !definition) continue
      const id = exampleId(term, definition)
      const current = entries.get(id)
      if (current) {
        if (!current.datasets.includes(dataset.id)) current.datasets.push(dataset.id)
        if (!current.types.includes(dataset.type)) current.types.push(dataset.type)
      } else {
        entries.set(id, {
          id,
          key: normalizeTerm(term),
          term,
          definition,
          types: [dataset.type],
          datasets: [dataset.id],
        })
      }
    }
  }

  return [...entries.values()]
    .map((entry) => ({
      ...entry,
      types: entry.types.sort(),
      datasets: entry.datasets.sort(),
    }))
    .sort((left, right) =>
      left.key.localeCompare(right.key, 'en') || left.definition.localeCompare(right.definition, 'zh-CN'),
    )
}

function buildProgress(catalog, latestRecords, checkpoint = null) {
  let completed = 0
  let failed = 0
  for (const entry of catalog) {
    const record = latestRecords.get(entry.id)
    if (record?.status === 'success') completed += 1
    else if (record?.status === 'failed') failed += 1
  }
  const progress = {
    schemaVersion: 1,
    total: catalog.length,
    completed,
    failed,
    pending: catalog.length - completed - failed,
    completionPercent: Number(((completed / Math.max(catalog.length, 1)) * 100).toFixed(2)),
    provider,
    model,
    updatedAt: new Date().toISOString(),
  }
  if (checkpoint) progress.checkpoint = checkpoint
  return progress
}

let commitQueue = Promise.resolve()

function serializeCommit(operation) {
  const result = commitQueue.then(operation, operation)
  commitQueue = result.catch(() => {})
  return result
}

function outputText(response) {
  if (typeof response?.output_text === 'string') return response.output_text
  return (Array.isArray(response?.output) ? response.output : [])
    .flatMap((item) => Array.isArray(item?.content) ? item.content : [])
    .filter((item) => item?.type === 'output_text' && typeof item.text === 'string')
    .map((item) => item.text)
    .join('')
}

function schemaFor(entries) {
  return {
    type: 'object',
    additionalProperties: false,
    properties: {
      examples: {
        type: 'array',
        items: {
          type: 'object',
          additionalProperties: false,
          properties: {
            id: { type: 'string', enum: entries.map((entry) => entry.id) },
            exampleSentence: { type: 'string' },
            exampleTranslation: { type: 'string' },
            sourceAccepted: { type: 'boolean' },
          },
          required: ['id', 'exampleSentence', 'exampleTranslation', 'sourceAccepted'],
        },
      },
    },
    required: ['examples'],
  }
}

function generationPrompt(entries) {
  return [
    '为下面的英语词条分别编写一条自然、清晰、适合中国英语学习者的英文例句，并提供准确的简体中文翻译。',
    '要求：',
    '1. 严格依据给出的中文释义体现目标含义，不要使用无关词义。',
    '   如果释义只有“无”或“暂无释义”，使用该词条最常见、最自然的现代英语含义。',
    '   先把多词表达当作固定短语或习语判断，不要只按单个词字面猜测；例如 big potato 表示重要人物。',
    '2. 英文通常为 8 到 18 个单词，最多 24 个单词；只写一个完整句子。',
    '3. 普通单词尽量保留给出的拼写；可按语法进行合理词形变化。',
    '4. 普通词组应完整、连续出现；含 sb./sth./doing 等占位符时，用自然的人或事物替换占位符。',
    '5. 避免生僻专名、争议内容、机械模板和与其他词条重复的句子。',
    '6. 中文翻译必须和英文逐意对应，不要额外解释词义。',
    '   翻译必须符合自然简体中文搭配，尤其根据名词选择正确量词，禁止机械直译（如 a bunch of trash 应译为“一堆垃圾”）。',
    '7. 每个输入 id 必须且只能返回一次，不得遗漏或增加 id。',
    '8. 如果输入包含 sourceSentences，从中选择最符合当前中文释义的一句，原样复制为 exampleSentence，不得改写；只生成准确的中文翻译。',
    '9. 如果 sourceSentences 中没有一句符合目标词义，复制第一句并返回 sourceAccepted=false；不要勉强采用错误语境。',
    '10. 如果输入不包含 sourceSentences，才自行编写英文例句，并返回 sourceAccepted=true。',
    '',
    JSON.stringify(entries.map(({ id, term, definition, types, sourceCandidates }) => ({
      id,
      term,
      definition,
      types,
      ...(sourceCandidates?.length ? {
        sourceSentences: sourceCandidates.map((candidate) => candidate.sentence),
        sourceType: sourceCandidates[0].source.type,
      } : {}),
    }))),
  ].join('\n')
}

function shouldUseThinking(entries) {
  if (!thinkForUndefined) return false
  return entries.some((entry) => {
    const definition = normalizeDefinition(entry.definition)
    return /^(?:无|暂无释义|暂无)$/.test(definition) && normalizeTerm(entry.term).includes(' ')
  })
}

let nextRequestAt = 0
async function waitForRequestSlot() {
  const delay = Math.max(0, nextRequestAt - Date.now())
  if (delay) await new Promise((resolvePromise) => setTimeout(resolvePromise, delay))
  nextRequestAt = Date.now() + requestIntervalMs
}

async function requestOpenAiExamples(entries) {
  await waitForRequestSlot()
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), requestTimeoutMs)
  try {
    const response = await fetch(`${openAiBaseUrl}/responses`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        store: false,
        instructions: 'You are an expert bilingual English teacher and lexicographer. Return only schema-compliant data.',
        input: generationPrompt(entries),
        max_output_tokens: Math.max(1200, entries.length * 140),
        text: {
          format: {
            type: 'json_schema',
            name: 'english_learning_examples',
            strict: true,
            schema: schemaFor(entries),
          },
        },
      }),
      signal: controller.signal,
    })
    if (!response.ok) {
      const detail = (await response.text()).slice(0, 1200)
      const error = new Error(`OpenAI API HTTP ${response.status}: ${detail}`)
      error.status = response.status
      throw error
    }
    const result = await response.json()
    const text = outputText(result)
    if (!text) throw new Error(`OpenAI response contains no output text (status: ${result.status ?? 'unknown'})`)
    return JSON.parse(text).examples
  } finally {
    clearTimeout(timeout)
  }
}

async function requestOllamaExamples(entries, attempt) {
  await waitForRequestSlot()
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), requestTimeoutMs)
  const schema = schemaFor(entries)
  try {
    const response = await fetch(`${ollamaBaseUrl}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model,
        stream: false,
        think: shouldUseThinking(entries),
        keep_alive: ollamaKeepAlive,
        format: schema,
        messages: [
          {
            role: 'system',
            content: 'You are an expert bilingual English teacher and lexicographer. Return only valid JSON that matches the supplied schema.',
          },
          {
            role: 'user',
            content: `${generationPrompt(entries)}\n\nJSON Schema:\n${JSON.stringify(schema)}`,
          },
        ],
        options: {
          temperature: 0.2,
          num_ctx: ollamaNumCtx,
          num_predict: shouldUseThinking(entries) ? Math.max(4096, entries.length * 320) : Math.max(512, entries.length * 160),
          seed: 41 + attempt,
        },
      }),
      signal: controller.signal,
    })
    if (!response.ok) {
      const detail = (await response.text()).slice(0, 1200)
      const error = new Error(`Ollama API HTTP ${response.status}: ${detail}`)
      error.status = response.status
      throw error
    }
    const result = await response.json()
    const content = result?.message?.content
    if (typeof content !== 'string' || !content.trim()) {
      throw new Error(`Ollama response contains no message content (done reason: ${result?.done_reason ?? 'unknown'})`)
    }
    return JSON.parse(content).examples
  } finally {
    clearTimeout(timeout)
  }
}

async function requestExamples(entries, attempt) {
  return provider === 'ollama'
    ? requestOllamaExamples(entries, attempt)
    : requestOpenAiExamples(entries)
}

async function reviewOllamaExamples(entries, candidates, attempt) {
  await waitForRequestSlot()
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), requestTimeoutMs)
  const schema = schemaFor(entries)
  const candidateById = new Map((Array.isArray(candidates) ? candidates : []).map((item) => [item?.id, item]))
  const reviewItems = entries.map((entry) => ({
    id: entry.id,
    term: entry.term,
    definition: entry.definition,
    exampleSentence: candidateById.get(entry.id)?.exampleSentence || '',
    exampleTranslation: candidateById.get(entry.id)?.exampleTranslation || '',
    sourceLocked: Boolean(entry.sourceCandidates?.length),
  }))

  try {
    const response = await fetch(`${ollamaBaseUrl}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model,
        stream: false,
        think: shouldUseThinking(entries),
        keep_alive: ollamaKeepAlive,
        format: schema,
        messages: [
          {
            role: 'system',
            content: 'You are the final bilingual quality reviewer. Return only valid JSON matching the supplied schema.',
          },
          {
            role: 'user',
            content: [
              '逐条审校下面的英语学习例句，并直接返回修正后的最终版本。',
              '1. 英文必须体现给出的中文释义，语法自然，并正确使用目标词条。',
              '2. 中文必须是自然、准确的简体中文，使用正确量词和搭配，禁止逐词机械翻译。',
              '3. 例如 a bunch of trash 是“一堆垃圾”，a collection of stamps 是“一批/一套邮票”，不能写成“一收藏的邮票”。',
              '4. sourceLocked=true 时英文来自开放语料，必须原样保留；若词义不符，返回 sourceAccepted=false。',
              '5. sourceLocked=false 时可以同时修正英文和中文，并返回 sourceAccepted=true。',
              '6. 不要增加解释，每个 id 只返回一次。',
              '',
              JSON.stringify(reviewItems),
              '',
              `JSON Schema:\n${JSON.stringify(schema)}`,
            ].join('\n'),
          },
        ],
        options: {
          temperature: 0.1,
          num_ctx: ollamaNumCtx,
          num_predict: shouldUseThinking(entries) ? Math.max(4096, entries.length * 320) : Math.max(512, entries.length * 160),
          seed: 1041 + attempt,
        },
      }),
      signal: controller.signal,
    })
    if (!response.ok) {
      const detail = (await response.text()).slice(0, 1200)
      const error = new Error(`Ollama review HTTP ${response.status}: ${detail}`)
      error.status = response.status
      throw error
    }
    const result = await response.json()
    const content = result?.message?.content
    if (typeof content !== 'string' || !content.trim()) throw new Error('Ollama review returned no content')
    return JSON.parse(content).examples
  } finally {
    clearTimeout(timeout)
  }
}

async function reviewExamples(entries, candidates, attempt) {
  if (!reviewEnabled || provider !== 'ollama') return candidates
  return reviewOllamaExamples(entries, candidates, attempt)
}

async function verifyProvider() {
  if (provider === 'openai') {
    if (!apiKey) throw new Error('OPENAI_API_KEY is not set. Set it in .env.local before generating examples.')
    return
  }

  let response
  try {
    response = await fetch(`${ollamaBaseUrl}/api/tags`, { signal: AbortSignal.timeout(5000) })
  } catch (error) {
    throw new Error(`Cannot connect to Ollama at ${ollamaBaseUrl}. Start the Ollama application first: ${error.message}`)
  }
  if (!response.ok) throw new Error(`Ollama health check failed with HTTP ${response.status}`)
  const result = await response.json()
  const installedModels = (result?.models || []).map((item) => item.name || item.model).filter(Boolean)
  if (!installedModels.includes(model)) {
    throw new Error(`Ollama model "${model}" is not installed. Installed models: ${installedModels.join(', ') || 'none'}`)
  }
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function inflectedForms(word) {
  const forms = new Set([word])
  if (!/^[a-z]+$/i.test(word)) return [...forms]

  if (/ie$/i.test(word)) {
    forms.add(`${word.slice(0, -2)}ying`)
  } else if (/e$/i.test(word)) {
    forms.add(`${word}d`)
    forms.add(`${word.slice(0, -1)}ing`)
  } else {
    forms.add(`${word}ed`)
    forms.add(`${word}ing`)
  }

  if (/[^aeiou]y$/i.test(word)) {
    forms.add(`${word.slice(0, -1)}ies`)
    forms.add(`${word.slice(0, -1)}ied`)
  } else if (/(?:s|x|z|ch|sh|o)$/i.test(word)) {
    forms.add(`${word}es`)
  } else {
    forms.add(`${word}s`)
  }

  if (/[aeiou][bcdfghjklmnpqrstvz]$/i.test(word) && !/[wxy]$/i.test(word)) {
    const finalLetter = word.at(-1)
    forms.add(`${word}${finalLetter}ed`)
    forms.add(`${word}${finalLetter}ing`)
  }

  return [...forms].sort((left, right) => right.length - left.length)
}

function hasTargetUsage(entry, sentence) {
  const term = normalizeTerm(entry.term)
  if (/\b(?:sb|sth|somebody|something)\.?\b|\.{2,}|[/()]/i.test(term)) return true
  const normalizedSentence = normalizeTerm(sentence)

  const alternatives = [term]
  if (/^(?:a|an|the)\s+/i.test(term)) {
    alternatives.push(term.replace(/^(?:a|an|the)\s+/i, ''))
  }

  return alternatives.some((alternative) => {
    const words = alternative.split(/\s+/)
    const pattern = words.map((word, index) => {
      if (/^oneself$/i.test(word)) {
        return '(?:oneself|myself|yourself|himself|herself|itself|ourselves|yourselves|themselves)'
      }
      if (index === words.length - 1 && /^[a-z]+$/i.test(word)) {
        return `(?:${inflectedForms(word).map(escapeRegExp).join('|')})`
      }
      return escapeRegExp(word)
    }).join('\\s+')
    return new RegExp(`(?:^|[^a-z])${pattern}(?:$|[^a-z])`, 'i').test(normalizedSentence)
  })
}

function definitionKeywords(definition) {
  return normalizeDefinition(definition)
    .split(/[；;，,、。/]|\bor\b/i)
    .flatMap((part) => part.match(/[\u3400-\u9fff]{2,}/gu) || [])
    .map((keyword) => keyword
      .replace(/^(?:使|把|被)/, '')
      .replace(/[的地得儿了]+$/, ''))
    .filter((keyword) => keyword.length >= 2 && !['暂无释义', '没有释义', '的变体'].includes(keyword))
}

function translationMatchesDefinition(definition, translation) {
  if (/^(?:无|暂无释义|暂无)$/.test(normalizeDefinition(definition))) return true
  const keywords = definitionKeywords(definition)
  if (!keywords.length) return true
  if (keywords.some((keyword) => translation.includes(keyword))) return true
  if (keywords.some((keyword) => keyword.includes('一点')) && /(?:一点|有点)/.test(translation)) return true
  return false
}

function validateExample(entry, candidate, usedSentences, sourceCandidates) {
  if (!candidate || candidate.id !== entry.id) return '返回结果缺失或 id 不匹配'
  const sentence = String(candidate.exampleSentence ?? '').trim().replace(/\s+/g, ' ')
  const translation = String(candidate.exampleTranslation ?? '').trim().replace(/\s+/g, ' ')
  const wordCount = sentence.split(/\s+/).filter(Boolean).length
  if (wordCount < 4 || wordCount > 24) return `英文例句长度异常（${wordCount} 个单词）`
  if (!/[a-z]/i.test(sentence)) return '英文例句不包含英文字母'
  if (!/^[A-Z]/.test(sentence)) return '英文例句不是大写字母开头的完整句子'
  if (/\b(?:Tom|Mary|John|Alice|Bob|Jack|Jane|Mike|Michael|Peter|Susan|Linda|Nancy)\b/.test(sentence)) {
    return '英文例句包含不必要的常见人名'
  }
  if (!/[\u3400-\u9fff]/u.test(translation)) return '中文翻译不包含中文字符'
  let selectedSource = null
  if (sourceCandidates?.length) {
    if (candidate.sourceAccepted !== true) return '语料例句与当前中文释义不匹配'
    selectedSource = sourceCandidates.find((source) => sentence === source.sentence.replace(/\s+/g, ' ').trim())
    if (!selectedSource) return '模型没有原样使用候选语料例句'
    if (!translationMatchesDefinition(entry.definition, translation)) return '语料翻译未体现当前中文释义关键词'
  }
  if (!hasTargetUsage(entry, sentence)) return '英文例句未使用目标词条'
  if (/^A (?:bunch|collection|group|pair|series|set) of\b.*\b(?:are|were|have)\b/i.test(sentence)) {
    return '集合名词作主语时存在明显主谓一致错误'
  }
  const sentenceKey = sentence.toLocaleLowerCase('en-US')
  const existingOwner = usedSentences.get(sentenceKey)
  if (existingOwner && existingOwner !== entry.id) return '英文例句与已有记录重复'
  return { sentence, translation, sentenceKey, sourceCandidate: selectedSource }
}

async function recordSuccess(entry, candidate, validation, attempt, sourceCandidate) {
  const record = {
    id: entry.id,
    key: entry.key,
    term: entry.term,
    definition: entry.definition,
    exampleSentence: validation.sentence,
    exampleTranslation: validation.translation,
    status: 'success',
    provider,
    model,
    generationMethod: sourceCandidate ? 'corpus-translation' : 'ai-generated',
    source: sourceCandidate?.source || { type: provider, model },
    attempt,
    updatedAt: new Date().toISOString(),
  }
  return serializeCommit(async () => {
    const line = `${JSON.stringify(record)}\n`
    await appendFile(examplesPath, line, 'utf8')
    await appendFile(journalPath, line, 'utf8')
    latestRecords.set(entry.id, record)
    return record
  })
}

async function recordFailure(entry, reason, attempt) {
  const record = {
    id: entry.id,
    key: entry.key,
    term: entry.term,
    definition: entry.definition,
    status: 'failed',
    provider,
    model,
    attempt,
    error: String(reason).slice(0, 1600),
    updatedAt: new Date().toISOString(),
  }
  return serializeCommit(async () => {
    await appendFile(journalPath, `${JSON.stringify(record)}\n`, 'utf8')
    await appendFile(errorLogPath, `[${record.updatedAt}] ${entry.term}\t${record.error}\n`, 'utf8')
    latestRecords.set(entry.id, record)
    return record
  })
}

async function processBatch(entries, usedSentences) {
  let pending = [...entries]
  let lastError = '生成结果未通过校验'
  const rejectedSourceTypes = new Map()

  for (let attempt = 1; attempt <= maxAttempts && pending.length; attempt += 1) {
    try {
      const requestEntries = pending.map((entry) => ({
        ...entry,
        sourceCandidates: selectSourceCandidates(entry, rejectedSourceTypes.get(entry.id)),
      }))
      const generatedCandidates = await requestExamples(requestEntries, attempt)
      const candidates = await reviewExamples(requestEntries, generatedCandidates, attempt)
      const byId = new Map((Array.isArray(candidates) ? candidates : []).map((item) => [item?.id, item]))
      const retry = []
      for (const requestEntry of requestEntries) {
        const entry = requestEntry
        const validation = validateExample(entry, byId.get(entry.id), usedSentences, requestEntry.sourceCandidates)
        if (typeof validation === 'string') {
          lastError = validation
          if (requestEntry.sourceCandidates?.length) {
            if (!rejectedSourceTypes.has(entry.id)) rejectedSourceTypes.set(entry.id, new Set())
            rejectedSourceTypes.get(entry.id).add(requestEntry.sourceCandidates[0].source.type)
          }
          retry.push(entry)
          continue
        }
        usedSentences.set(validation.sentenceKey, entry.id)
        try {
          await recordSuccess(entry, byId.get(entry.id), validation, attempt, validation.sourceCandidate)
        } catch (error) {
          usedSentences.delete(validation.sentenceKey)
          throw error
        }
      }
      pending = retry
    } catch (error) {
      lastError = error?.name === 'AbortError' ? '请求超时' : error.message
      if (error?.status && error.status < 500 && error.status !== 408 && error.status !== 429) break
    }

    if (pending.length && attempt < maxAttempts) {
      await new Promise((resolvePromise) => setTimeout(resolvePromise, Math.min(8000, attempt * 1500)))
    }
  }

  for (const entry of pending) await recordFailure(entry, lastError, maxAttempts)
}

await mkdir(examplesRoot, { recursive: true })
const catalog = await collectCatalog()
await writeJsonAtomic(catalogPath, {
  schemaVersion: 1,
  total: catalog.length,
  generatedAt: new Date().toISOString(),
  entries: catalog,
})

let latestRecords = await readLatestJsonl(journalPath)
const previousProgress = await readJson(progressPath, {})
let latestCheckpoint = previousProgress.checkpoint || null
await writeJsonAtomic(progressPath, buildProgress(catalog, latestRecords, latestCheckpoint))

console.log(`Example catalog: ${catalog.length.toLocaleString()} unique term-definition pairs`)
console.log(`Catalog path: ${catalogPath}`)
if (prepareOnly) {
  console.log('Preparation complete. No API requests were made.')
  process.exit(0)
}

await verifyProvider()

const latestExamples = await readLatestJsonl(examplesPath)
const tatoebaIndex = await readSourceIndex(tatoebaIndexPath)
const wordnetIndex = await readSourceIndex(wordnetIndexPath)

function indexCandidates(index, key) {
  const value = index.get(key)
  if (!value) return []
  if (Array.isArray(value.candidates)) return value.candidates
  if (value.sentence) return [value]
  return []
}

function selectSourceCandidates(entry, rejectedTypes = new Set()) {
  if (!rejectedTypes.has('tatoeba')) {
    const candidates = indexCandidates(tatoebaIndex, entry.key)
    if (candidates.length) return candidates
  }
  if (!rejectedTypes.has('wordnet')) {
    const candidates = indexCandidates(wordnetIndex, entry.key)
    if (candidates.length) return candidates
  }
  return []
}

const usedSentences = new Map(
  [...latestExamples.values()]
    .map((record) => [normalizeTerm(record.exampleSentence), record.id])
    .filter(([sentence]) => Boolean(sentence)),
)
let pending = catalog.filter((entry) => {
  const record = latestRecords.get(entry.id)
  if (force) return true
  if (onlyFailed) return record?.status === 'failed'
  return record?.status !== 'success'
})
if (termFilter) pending = pending.filter((entry) => entry.key === termFilter)
if (limit) pending = pending.slice(0, limit)

console.log(`Provider: ${provider}`)
console.log(`Model: ${model}`)
console.log(`Pending this run: ${pending.length.toLocaleString()}`)
console.log(`Batch size: ${batchSize}; concurrency: ${concurrency}; max attempts: ${maxAttempts}`)
console.log(`Second-pass review: ${reviewEnabled && provider === 'ollama' ? 'enabled' : 'disabled'}`)
const pendingCorpusCoverage = pending.reduce((count, entry) => count + (selectSourceCandidates(entry).length ? 1 : 0), 0)
console.log(`Corpus candidates this run: ${pendingCorpusCoverage.toLocaleString()}`)

const batches = []
for (let index = 0; index < pending.length; index += batchSize) {
  batches.push({ index, entries: pending.slice(index, index + batchSize) })
}

let nextBatch = 0
let handled = 0
async function runWorker(workerId) {
  while (nextBatch < batches.length) {
    const batchNumber = nextBatch
    nextBatch += 1
    const batch = batches[batchNumber]
    await processBatch(batch.entries, usedSentences)
    handled += batch.entries.length
    latestCheckpoint = {
      workerId,
      batchNumber: batchNumber + 1,
      catalogOffset: batch.index,
      term: batch.entries.at(-1).term,
      processedAt: new Date().toISOString(),
    }
    await serializeCommit(() => writeJsonAtomic(
      progressPath,
      buildProgress(catalog, latestRecords, latestCheckpoint),
    ))
    console.log(`[${handled.toLocaleString()}/${pending.length.toLocaleString()}] worker ${workerId}: ${batch.entries.at(-1).term}`)
  }
}

await Promise.all(Array.from(
  { length: Math.min(concurrency, batches.length || 1) },
  (_, index) => runWorker(index + 1),
))

const finalProgress = buildProgress(catalog, await readLatestJsonl(journalPath), latestCheckpoint)
await writeJsonAtomic(progressPath, finalProgress)
console.log(JSON.stringify(finalProgress, null, 2))
