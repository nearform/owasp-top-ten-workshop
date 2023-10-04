import t from 'tap'
import { step5Server } from './server.js'

const { test } = t

test('A05: Security Misconfiguration', async t => {
  let fastify

  t.beforeEach(async () => {
    fastify = await step5Server()
  })

  t.teardown(() => fastify.close())

  t.test(`cookie is signed`, async t => {
    const loginRes = await fastify.inject({
      url: '/login',
      method: 'POST',
      body: {
        username: 'alice',
        password: 'newpassword'
      }
    })
    const [cookie] = loginRes.cookies
    t.equal(cookie.name, 'userId')
    t.not(cookie.value, '1')
    t.equal(loginRes.statusCode, 200)
  })

  t.test(`cookie cannot be altered`, async t => {
    const res = await fastify.inject({
      url: '/profile',
      method: 'GET',
      cookies: {
        userId: '2'
      }
    })
    t.notSame(res.json(), {
      username: 'bob',
      id: 2,
      age: 31
    })
    t.equal(res.statusCode, 401)
  })

  t.test(`cookie authentication flow`, async t => {
    const loginRes = await fastify.inject({
      url: '/login',
      method: 'POST',
      body: {
        username: 'alice',
        password: 'newpassword'
      }
    })
    const [cookie] = loginRes.cookies
    const res = await fastify.inject({
      url: '/profile',
      method: 'GET',
      cookies: {
        [cookie.name]: cookie.value
      }
    })

    t.equal(res.statusCode, 200)
  })
})
