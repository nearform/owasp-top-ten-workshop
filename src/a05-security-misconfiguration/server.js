import { buildServer, env } from 'owasp-shared'
import { loginRoute, profileRoute } from './routes/user/index.js'

export async function step5Server() {
  const fastify = await buildServer({
    baseDir: import.meta.url,
    env,
    fastifyOptions: {},
    excludeSharedRoutes: true
  })
  loginRoute(fastify)
  profileRoute(fastify)
  return fastify
}
