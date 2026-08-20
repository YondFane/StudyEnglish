import { spawn } from 'node:child_process'
import { closeSync, openSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(scriptDir, '..')
const examplesDir = resolve(projectRoot, 'data', 'examples')
const statePath = resolve(examplesDir, 'runner-state.json')
const stdoutPath = resolve(examplesDir, 'runner-output.log')
const stderrPath = resolve(examplesDir, 'runner-error.log')

function isRunning(pid) {
  if (!Number.isInteger(pid) || pid <= 0) return false
  try {
    process.kill(pid, 0)
    return true
  } catch {
    return false
  }
}

try {
  const previous = JSON.parse(readFileSync(statePath, 'utf8'))
  if (isRunning(previous.pid)) {
    console.log(JSON.stringify({ ...previous, alreadyRunning: true }, null, 2))
    process.exit(0)
  }
} catch {
  // No previous runner state, or the previous state is incomplete.
}

const stdout = openSync(stdoutPath, 'a')
const stderr = openSync(stderrPath, 'a')
const generatorPath = resolve(scriptDir, 'generate-examples.mjs')
const generatorArgs = [
  generatorPath,
  '--batch-size=10',
  '--concurrency=2',
  '--max-attempts=3',
  ...process.argv.slice(2),
]

const child = spawn(process.execPath, generatorArgs, {
  cwd: projectRoot,
  detached: true,
  windowsHide: true,
  stdio: ['ignore', stdout, stderr],
})

child.unref()
closeSync(stdout)
closeSync(stderr)

const state = {
  pid: child.pid,
  startedAt: new Date().toISOString(),
  command: `${process.execPath} ${generatorArgs.join(' ')}`,
  stdoutPath,
  stderrPath,
}

writeFileSync(statePath, `${JSON.stringify(state, null, 2)}\n`, 'utf8')
console.log(JSON.stringify(state, null, 2))
