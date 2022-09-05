import Fastify from 'fastify'
import { buildServer } from '../shared/build-server'
import { env } from '../env'

const start = async function () {
  const fastify = buildServer({
    baseDir: import.meta.url,
    env,
    fastifyOptions: {}
  })
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
