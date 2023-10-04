import { startServer } from 'owasp-shared'
import { step7Server } from './server.js'

const start = async function () {
  const fastify = await step7Server()
  startServer(fastify)
}

start()
