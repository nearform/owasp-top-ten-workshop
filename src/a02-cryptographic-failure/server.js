import { buildServer } from 'owasp-shared'
import { env } from 'owasp-shared'

export async function step2Server() {
  const fastify = await buildServer({
    baseDir: import.meta.url,
    env,
    fastifyOptions: {},
    autoloadRoutes: true
  })
  return fastify
}
