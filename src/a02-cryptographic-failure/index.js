import { step2Server } from './server.js'
import { startServer } from 'owasp-shared'

const start = async function () {
  const fastify = await step2Server()
  startServer(fastify)
}

start()
