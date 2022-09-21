import { buildServer, env } from 'owasp-shared'
import ecommerceRoute from './routes/ecommerce/index.js'
import rateLimit from '@fastify/rate-limit'

export async function step4Server() {
  const fastify = await buildServer({
    baseDir: import.meta.url,
    env,
    fastifyOptions: {}
  })

  await fastify.register(rateLimit)

  ecommerceRoute(fastify)
  return fastify
}
