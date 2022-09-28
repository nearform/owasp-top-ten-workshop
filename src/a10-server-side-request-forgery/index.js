import { step10Server } from './server.js'
import { startServer, startTargetServer } from 'owasp-shared'

const start = async function () {
  const fastify = await step10Server()
  startServer(fastify)
}

start()
startTargetServer(() => {})
