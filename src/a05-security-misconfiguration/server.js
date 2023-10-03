import { buildServer, env, cors } from 'owasp-shared'
import { loginRoute, profileRoute } from './routes/user/index.js'

export async function step5Server() {
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
  loginRoute(fastify)
  profileRoute(fastify)
  return fastify
}
