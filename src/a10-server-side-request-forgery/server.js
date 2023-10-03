import { buildServer, env, cors } from 'owasp-shared'
import profilePicture from './routes/user/index.js'
export async function step10Server() {
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
  profilePicture(fastify)
  return fastify
}
