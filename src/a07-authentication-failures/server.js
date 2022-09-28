import { buildServer, env } from 'owasp-shared'
import { registerRoute } from './routes/user/index.js'

export async function step7Server() {
  const fastify = await buildServer({
    baseDir: import.meta.url,
    env,
    fastifyOptions: {},
    excludeSharedRoutes: true
  })
  registerRoute(fastify)
  return fastify
}
