import { buildServer, env } from 'owasp-shared'
import profilePicture from './routes/user/index.js'
export async function step10Server() {
  const fastify = await buildServer({
    baseDir: import.meta.url,
    env,
    fastifyOptions: {},
    excludeSharedRoutes: true
  })
  profilePicture(fastify)
  return fastify
}
