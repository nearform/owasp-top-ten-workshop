import { test } from 'node:test'
import assert from 'node:assert/strict'
import { step5Server } from './server.js'

test('A05: Security Misconfiguration', async t => {
  let fastify

  t.beforeEach(async () => {
    fastify = await step5Server()
  })

  t.after(() => fastify.close())

  await t.test(`cookie is signed`, async () => {
    const loginRes = await fastify.inject({
      url: '/login',
      method: 'POST',
      body: {
        username: 'alice',
        password: 'newpassword'
      }
    })
    const [cookie] = loginRes.cookies
    assert.equal(cookie.name, 'userId')
    assert.notEqual(cookie.value, '1')
    assert.equal(loginRes.statusCode, 200)
  })

  await t.test(`cookie cannot be altered`, async () => {
    const res = await fastify.inject({
      url: '/profile',
      method: 'GET',
      cookies: {
        userId: '2'
      }
    })
    assert.notDeepEqual(res.json(), {
      username: 'bob',
      id: 2,
      age: 31
    })
    assert.equal(res.statusCode, 401)
  })

  await t.test(`cookie authentication flow`, async () => {
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

    assert.equal(res.statusCode, 200)
  })
})
