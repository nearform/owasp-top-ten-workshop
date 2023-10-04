import { buildServer, env, cors } from 'owasp-shared'
import { registerRoute } from './routes/user/index.js'

export async function step7Server() {
  const fastify = await buildServer({
    baseDir: import.meta.url,
    env,
    fastifyOptions: {},
    excludeSharedRoutes: true
  })
  fastify.register(cors, {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  })
  registerRoute(fastify)
  return fastify
}
