import { startServer } from 'owasp-shared'
import { step6Server } from './server.js'
import { startTargetServer } from './routes/profile/index.js'

const start = async function () {
  const fastify = await step6Server()
  startServer(fastify)
}

start()

startTargetServer()
