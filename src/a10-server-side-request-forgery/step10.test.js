import t from 'tap'
import { step5Server } from './server.js'

const { test } = t

test('A10: Server Side Request Forgery', async t => {
  let fastify

  t.beforeEach(async () => {
    fastify = await step5Server()
  })

  t.teardown(() => fastify.close())
})
