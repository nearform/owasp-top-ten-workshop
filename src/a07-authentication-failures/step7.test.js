import { test } from 'node:test'
import assert from 'node:assert/strict'
import { step7Server } from './server.js'
import { faker } from '@faker-js/faker'

test('A07: Identification and Authentication Failures:', async t => {
  let fastify

  t.beforeEach(async () => {
    fastify = await step7Server()
  })

  t.afterEach(() => fastify.close())

  await t.test(`non leaked password`, async () => {
    const registerRes = await fastify.inject({
      url: '/register',
      method: 'POST',
      body: {
        username: faker.internet.username(),
        password: 'N3v_3R-L3akEd'
      }
    })

    assert.equal(registerRes.statusCode, 200)
    assert.ok(registerRes.json().token)
  })

  await t.test(`leaked password`, async () => {
    const registerRes = await fastify.inject({
      url: '/register',
      method: 'POST',
      body: {
        username: faker.internet.username(),
        password: 'L3Ak_3d-Lik3_N0-t0M0rr0W'
      }
    })

    assert.equal(registerRes.statusCode, 400)
    assert.equal(
      registerRes.json().message,
      'You are trying to use password that is known to be exposed in data breaches: adobe. Use a different one. Read more here: https://haveibeenpwned.com/Passwords.'
    )
  })
})
