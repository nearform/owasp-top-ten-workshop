import { buildServer, env, cors } from 'owasp-shared'
import profileRoute from './routes/profile/index.js'

export async function step6Server() {
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

  profileRoute(fastify)

  return fastify
}
