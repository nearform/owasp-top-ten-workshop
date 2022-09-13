import { buildServer, env } from 'owasp-shared'

export async function step1Server() {
  const fastify = await buildServer({
    baseDir: import.meta.url,
    env,
    fastifyOptions: {},
    autoloadRoutes: true
  })
  return fastify
}
