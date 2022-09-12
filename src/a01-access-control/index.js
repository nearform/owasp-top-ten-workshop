import { step1Server } from './server.js'
import { startServer } from 'owasp-shared'

const start = async function () {
  const fastify = await step1Server()
  startServer(fastify)
}

start()
