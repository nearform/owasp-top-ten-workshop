import { buildServer, env } from 'owasp-shared'
import movieTheaterRoute from './routes/movieTheater/index.js'
import rateLimit from '@fastify/rate-limit'

export async function step4Server() {
  const fastify = await buildServer({
    baseDir: import.meta.url,
    env,
    fastifyOptions: {}
  })

  await fastify.register(rateLimit)

  movieTheaterRoute(fastify)
  return fastify
}
