import { startServer } from 'owasp-shared'
import { step5Server } from './server.js'

const start = async function () {
  const fastify = await step5Server()
  startServer(fastify)
}

start()
