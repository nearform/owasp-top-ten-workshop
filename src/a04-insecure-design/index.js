import { step4Server } from './server.js'
import { startServer } from 'owasp-shared'

const start = async function () {
  const fastify = await step4Server()
  startServer(fastify)
}

start()
