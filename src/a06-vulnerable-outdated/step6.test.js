import { test } from 'node:test'
import assert from 'node:assert/strict'
import { step6Server } from './server.js'
import { authHeaders } from 'owasp-shared'

test('A06: Vulnerable and outdated components', async t => {
  let fastify

  t.beforeEach(async () => {
    fastify = await step6Server()
  })

  t.afterEach(() => fastify.close())

  await t.test(`SSRF should be not exploitable`, async () => {
    const res = await fastify.inject({
      url: '/profile',
      method: 'GET',
      headers: authHeaders,
      query: {
        username: '//127.0.0.1'
      }
    })

    assert.equal(res.statusCode, 404)
  })
})
