import { buildServer, env } from 'owasp-shared'
import profileRoute from './routes/profile/index.js'

export async function step6Server() {
  const fastify = await buildServer({
    baseDir: import.meta.url,
    env,
    fastifyOptions: {},
    excludeSharedRoutes: true
  })

  profileRoute(fastify)

  return fastify
}
