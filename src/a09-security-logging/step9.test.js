import { authHeaders, startTargetServer } from 'owasp-shared'
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { step9Server } from './server.js'

test('A09: Security Logging', async t => {
  let fastify
  let targetServer
  const spy = t.mock.fn()

  t.before(async () => {
    targetServer = await startTargetServer(spy)
  })

  t.beforeEach(async () => {
    fastify = await step9Server()
  })

  t.afterEach(() => {
    fastify.close()
  })

  t.after(() => {
    targetServer.close()
  })

  await t.test(`CRLF should be not exploitable`, async () => {
    const res = await fastify.inject({
      url: '/profile',
      method: 'GET',
      headers: {
        ...authHeaders,
        'content-type': 'application/json\r\n\r\nGET /secret HTTP/1.1'
      }
    })

    assert.equal(res.statusCode, 400)
    assert.equal(spy.mock.callCount(), 0)
  })
})
