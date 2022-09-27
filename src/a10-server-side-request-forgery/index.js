import { startServer } from 'owasp-shared'
import { step10Server } from './server.js'

const start = async function () {
  const fastify = await step10Server()
  startServer(fastify)
}

start()
