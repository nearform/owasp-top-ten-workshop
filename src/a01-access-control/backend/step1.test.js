import t from 'tap'
import { authHeaders } from 'owasp-shared'
import { step1Server } from './server.js'

const { test } = t

test('A01: Access Control', async t => {
  let fastify

  t.beforeEach(async () => {
    fastify = await step1Server()
  })

  t.teardown(() => fastify.close())

  t.test(`doesn't return anything if not logged in`, async t => {
    const res = await fastify.inject({
      url: '/profile',
      method: 'GET',
      query: {
        username: 'bob'
      }
    })

    t.equal(res.statusCode, 401)
  })

  t.test(
    `doesn't return another user's info when changing get parameters`,
    async t => {
      const res = await fastify.inject({
        url: '/profile',
        method: 'GET',
        headers: authHeaders,
        query: {
          username: 'bob'
        }
      })

      t.equal(res.statusCode, 403)
    }
  )
})
