import { test } from 'node:test'
import assert from 'node:assert/strict'
import { step3Server } from './server.js'
import { authHeaders } from 'owasp-shared'

test('A03: Injection', async t => {
  let fastify

  t.beforeEach(async () => {
    fastify = await step3Server()
  })

  t.after(() => fastify.close())

  await t.test(`retrieves user correctly`, async () => {
    const res = await fastify.inject({
      url: '/customer',
      method: 'GET',
      headers: authHeaders,
      query: {
        name: 'alice'
      }
    })

    assert.equal(res.statusCode, 200)
  })

  await t.test(`doesn't allow sql injection`, async () => {
    const res = await fastify.inject({
      url: '/customer',
      method: 'GET',
      headers: authHeaders,
      query: {
        name: `' OR '1'='1`
      }
    })

    assert.equal(res.statusCode, 404)
  })
})
