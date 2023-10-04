import t from 'tap'
import { step3Server } from './server.js'
import { authHeaders } from 'owasp-shared'

const { test } = t

test('A03: Injection', async t => {
  let fastify

  t.beforeEach(async () => {
    fastify = await step3Server()
  })

  t.teardown(() => fastify.close())

  t.test(`retrieves user correctly`, async t => {
    const res = await fastify.inject({
      url: '/customer',
      method: 'GET',
      headers: authHeaders,
      query: {
        name: 'alice'
      }
    })
    t.equal(res.statusCode, 200)
  })

  t.test(`doesn't allow sql injection`, async t => {
    const res = await fastify.inject({
      url: '/customer',
      method: 'GET',
      headers: authHeaders,
      query: {
        name: `' OR '1'='1`
      }
    })
    t.equal(res.statusCode, 404)
  })
})
