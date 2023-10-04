import { buildServer, env, cors } from 'owasp-shared'
import customerRoute from './routes/customer/index.js'

export async function step3Server() {
  const fastify = await buildServer({
    baseDir: import.meta.url,
    env,
    fastifyOptions: {}
  })
  fastify.register(cors, {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  })
  customerRoute(fastify)
  return fastify
}
