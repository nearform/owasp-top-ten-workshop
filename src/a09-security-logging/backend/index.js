import { startServer, startTargetServer } from 'owasp-shared'
import { step9Server } from './server.js'

const start = async function () {
  const fastify = await step9Server()
  startServer(fastify)
}

start()
startTargetServer(() => {})
