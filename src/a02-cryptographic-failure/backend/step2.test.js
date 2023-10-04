import t from 'tap'
import { authHeaders } from 'owasp-shared'
import { step2Server } from './server.js'

const { test } = t

test('A02: Cryptographic Failure', async t => {
  let fastify

  t.beforeEach(async () => {
    fastify = await step2Server()
  })

  t.teardown(() => fastify.close())

  t.test(`can change Alice's password`, async t => {
    const res = await fastify.inject({
      url: '/change-password',
      method: 'POST',
      headers: authHeaders,
      body: {
        password: 'newpassword'
      }
    })

    t.equal(res.statusCode, 200)
  })

  t.test(`Password isn't hashed with weak md5`, async t => {
    const res = await fastify.inject({
      url: '/all-data',
      method: 'GET',
      headers: authHeaders
    })
    t.equal(res.statusCode, 200)
    const accounts = res.json()
    const alice = accounts.find(account => account.username === 'alice')
    const hashedPassword = alice.password
    t.notMatch(hashedPassword, '5e9d11a14ad1c8dd77e98ef9b53fd1ba')
  })
})
