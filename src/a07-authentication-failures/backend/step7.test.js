import t from 'tap'
import { step7Server } from './server.js'
import { faker } from '@faker-js/faker'

const { test } = t

test('A07: Identification and Authentication Failures:', async t => {
  let fastify

  t.beforeEach(async () => {
    fastify = await step7Server()
  })

  t.teardown(() => fastify.close())

  t.test(`non leaked password`, async t => {
    const registerRes = await fastify.inject({
      url: '/register',
      method: 'POST',
      body: {
        username: faker.internet.userName(),
        password: 'N3v_3R-L3akEd'
      }
    })
    t.equal(registerRes.statusCode, 200)
    t.ok(registerRes.json().token)
  })

  t.test(`leaked password`, async t => {
    const registerRes = await fastify.inject({
      url: '/register',
      method: 'POST',
      body: {
        username: faker.internet.userName(),
        password: 'L3Ak_3d-Lik3_N0-t0M0rr0W'
      }
    })
    t.equal(registerRes.statusCode, 400)
    t.equal(
      registerRes.json().message,
      'You are trying to use password that is known to be exposed in data breaches: adobe. Use a different one. Read more here: https://haveibeenpwned.com/Passwords.'
    )
  })
})
