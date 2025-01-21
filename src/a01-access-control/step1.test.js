import { test } from 'node:test'
import assert from 'node:assert/strict'
import { authHeaders } from 'owasp-shared'
import { step1Server } from './server.js'

test('A01: Access Control', async t => {
  let fastify

  t.beforeEach(async () => {
    fastify = await step1Server()
  })

  t.after(() => fastify.close())

  await t.test(`doesn't return anything if not logged in`, async () => {
    const res = await fastify.inject({
      url: '/profile',
      method: 'GET',
      query: {
        username: 'bob'
      }
    })

    assert.equal(res.statusCode, 401)
  })

  await t.test(
    `doesn't return another user's info when changing get parameters`,
    async () => {
      const res = await fastify.inject({
        url: '/profile',
        method: 'GET',
        headers: authHeaders,
        query: {
          username: 'bob'
        }
      })

      assert.equal(res.statusCode, 403)
    }
  )
})
