import { buildServer, env } from 'owasp-shared'
import profileRoute from './routes/profile/index.js'

export async function step1Server() {
  const fastify = await buildServer({
    baseDir: import.meta.url,
    env,
    fastifyOptions: {}
  })
  profileRoute(fastify)
  return fastify
}
