import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { copyFile, cp, mkdir } from 'node:fs/promises'
import { resolve, sep } from 'node:path'

function publishProjectAudio() {
  let projectRoot
  let outputRoot
  let basePath

  return {
    name: 'publish-project-audio',
    configResolved(config) {
      projectRoot = config.root
      outputRoot = resolve(config.root, config.build.outDir)
      basePath = config.base
    },
    configureServer(server) {
      const audioRoot = resolve(projectRoot, 'data/audio')
      const allowedRoot = `${audioRoot}${sep}`
      server.middlewares.use((request, response, next) => {
        const pathname = decodeURIComponent(String(request.url ?? '').split('?', 1)[0])
        const prefixes = [`${basePath}data/audio/`, '/data/audio/']
        const prefix = prefixes.find((candidate) => pathname.startsWith(candidate))
        if (!prefix) return next()

        const requestedFile = resolve(audioRoot, pathname.slice(prefix.length))
        if (!requestedFile.startsWith(allowedRoot)) {
          response.statusCode = 403
          response.end('Forbidden')
          return
        }

        request.url = `${basePath}@fs/${requestedFile.replaceAll('\\', '/')}`
        next()
      })
    },
    async closeBundle() {
      const sourceRoot = resolve(projectRoot, 'data/audio/type-1')
      const destinationRoot = resolve(outputRoot, 'data/audio/type-1')
      await mkdir(destinationRoot, { recursive: true })
      await Promise.all([
        copyFile(resolve(sourceRoot, 'catalog.json'), resolve(destinationRoot, 'catalog.json')),
        cp(resolve(sourceRoot, 'files'), resolve(destinationRoot, 'files'), {
          recursive: true,
          force: true,
        }),
      ])
    },
  }
}

export default defineConfig({
  base: '/StudyEnglish/',
  plugins: [vue(), publishProjectAudio()],
})
