import { buildServer } from '../shared/build-server.js'
import { env } from '../shared/env.js'

export async function step2Server() {
  const fastify = await buildServer({
    baseDir: import.meta.url,
    env,
    fastifyOptions: {},
    autoloadRoutes: true
  })
  return fastify
}
