const CACHE_PREFIX = 'study-english-runtime-'
const CACHE_NAME = `${CACHE_PREFIX}v1`
const MAX_CACHED_FILES = 80

async function trimCache(cache) {
  const keys = await cache.keys()
  if (keys.length <= MAX_CACHED_FILES) return
  await Promise.all(keys.slice(0, keys.length - MAX_CACHED_FILES).map((key) => cache.delete(key)))
}

async function cacheResponse(cache, request, response) {
  if (!response?.ok || response.type === 'opaque') return response
  await cache.put(request, response.clone())
  await trimCache(cache)
  return response
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.add(new Request(self.registration.scope, { cache: 'reload' })))
      .catch(() => undefined),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names
          .filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
          .map((name) => caches.delete(name)),
      )),
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  const scopeUrl = new URL(self.registration.scope)
  if (url.origin !== scopeUrl.origin || !url.pathname.startsWith(scopeUrl.pathname)) return

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME)
      try {
        const response = await fetch(request)
        return cacheResponse(cache, request, response)
      } catch {
        return (await cache.match(request)) || cache.match(self.registration.scope)
      }
    })())
    return
  }

  if (!url.pathname.includes('/assets/')) return

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME)
    const cached = await cache.match(request)
    if (cached) return cached
    return cacheResponse(cache, request, await fetch(request))
  })())
})
