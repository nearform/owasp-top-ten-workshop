import { step3Server } from './server.js'
import { startServer } from 'owasp-shared'

const start = async function () {
  const fastify = await step3Server()
  startServer(fastify)
}

start()
