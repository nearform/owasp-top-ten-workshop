import { startServer } from 'owasp-shared'
import { step6Server } from './server.js'

import { startTargetServer } from './routes/profile/helper.js'
startTargetServer()

const start = async function () {
  const fastify = await step6Server()
  startServer(fastify)
}

start()
