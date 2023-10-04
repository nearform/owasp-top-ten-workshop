import { authHeaders, startTargetServer } from 'owasp-shared'
import sinon from 'sinon'
import t from 'tap'
import { step9Server } from './server.js'

const { test } = t

test('A09: Security Logging', async t => {
  let fastify
  const spy = sinon.spy()
  const targetServer = await startTargetServer(spy)

  t.beforeEach(async () => {
    fastify = await step9Server()
  })

  t.teardown(() => {
    fastify.close()
    targetServer.close()
  })

  t.test(`CRLF should be not exploitable`, async t => {
    const res = await fastify.inject({
      url: '/profile',
      method: 'GET',
      headers: {
        ...authHeaders,
        'content-type': 'application/json\r\n\r\nGET /secret HTTP/1.1'
      }
    })
    t.equal(res.statusCode, 400)
    t.equal(spy.callCount, 0)
  })
})
