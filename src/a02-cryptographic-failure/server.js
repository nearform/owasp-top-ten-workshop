import { buildServer, cors, env } from 'owasp-shared'

export async function step2Server() {
  const fastify = await buildServer({
    baseDir: import.meta.url,
    env,
    fastifyOptions: {},
    autoloadRoutes: true
  })
  fastify.register(cors, {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  })
  return fastify
}
