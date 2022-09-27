import { step8Server } from './server.js'
import { startServer } from 'owasp-shared'

const start = async function () {
  const fastify = await step8Server()
  startServer(fastify)
}

start()
