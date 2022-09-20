import { buildServer, env } from 'owasp-shared'
import customerRoute from './routes/customer/index.js'

export async function step3Server() {
  const fastify = await buildServer({
    baseDir: import.meta.url,
    env,
    fastifyOptions: {}
  })
  customerRoute(fastify)
  return fastify
}
