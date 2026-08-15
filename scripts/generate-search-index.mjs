import { readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dataRoot = resolve(projectRoot, 'data/excel')
const manifest = JSON.parse(await readFile(resolve(dataRoot, 'manifest.json'), 'utf8'))

// Only terms are duplicated in this index. Full pronunciations and definitions stay
// in their original dataset and are loaded when a search result is selected.
const searchIndex = {
  version: 1,
  datasets: {},
}

for (const dataset of manifest.datasets) {
  const datasetPath = resolve(dataRoot, dataset.path.replace(/^\.\//, ''))
  const entries = JSON.parse(await readFile(datasetPath, 'utf8'))
  searchIndex.datasets[dataset.id] = entries.map((entry) => entry.term)
}

const outputPath = resolve(dataRoot, 'search-index.json')
await writeFile(outputPath, `${JSON.stringify(searchIndex)}\n`, 'utf8')

const count = Object.values(searchIndex.datasets).reduce((sum, terms) => sum + terms.length, 0)
console.log(`Generated ${outputPath} with ${count.toLocaleString()} terms.`)
