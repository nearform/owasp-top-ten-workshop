import { step6Server } from './server.js'
import { startServer, startTargetServer } from 'owasp-shared'

const start = async function () {
  const fastify = await step6Server()
  startServer(fastify)
}

start()

startTargetServer()
