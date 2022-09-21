import t from 'tap'
import { step6Server } from './server.js'
import { startTargetServer, authHeaders } from 'owasp-shared'

const { test } = t

test('A06: Vulnerable and outdated components', async t => {
  let fastify
  const targetServer = startTargetServer()

  t.beforeEach(async () => {
    fastify = await step6Server()
  })

  t.teardown(() => fastify.close(), targetServer.close())

  t.test(`SSRF should be not exploitable`, async t => {
    const res = await fastify.inject({
      url: '/profile',
      method: 'GET',
      headers: authHeaders,
      query: {
        username: '//127.0.0.1'
      }
    })
    t.equal(res.statusCode, 400)
  })
})
