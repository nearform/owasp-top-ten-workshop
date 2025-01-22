import { test } from 'node:test'
import assert from 'node:assert/strict'
import { authHeaders } from 'owasp-shared'
import { step2Server } from './server.js'

test('A02: Cryptographic Failure', async t => {
  let fastify

  t.beforeEach(async () => {
    fastify = await step2Server()
  })

  t.afterEach(() => fastify.close())

  await t.test(`can change Alice's password`, async () => {
    const res = await fastify.inject({
      url: '/change-password',
      method: 'POST',
      headers: authHeaders,
      body: {
        password: 'newpassword'
      }
    })

    assert.equal(res.statusCode, 200)
  })

  await t.test(`Password isn't hashed with weak md5`, async () => {
    const res = await fastify.inject({
      url: '/all-data',
      method: 'GET',
      headers: authHeaders
    })

    assert.equal(res.statusCode, 200)

    const accounts = res.json()
    const alice = accounts.find(account => account.username === 'alice')
    const hashedPassword = alice.password

    assert.doesNotMatch(hashedPassword, /5e9d11a14ad1c8dd77e98ef9b53fd1ba/)
  })
})
