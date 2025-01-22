import { test } from 'node:test'
import assert from 'node:assert/strict'
import { step10Server } from './server.js'
import { authHeaders, startTargetServer } from 'owasp-shared'

test('A10: Server side request forgery', async t => {
  let fastify
  const spy = t.mock.fn()
  const targetServer = await startTargetServer(spy)

  t.beforeEach(async () => {
    fastify = await step10Server()
  })

  t.after(() => {
    fastify.close()
    targetServer.close()
  })

  await t.test(`SSRF should be not exploitable`, async () => {
    const res = await fastify.inject({
      url: '/user/image',
      method: 'POST',
      headers: authHeaders,
      body: {
        imgUrl: 'http://localhost:3001/secret'
      }
    })

    assert.equal(res.statusCode, 403)
    assert.equal(spy.mock.callCount(), 0)
  })

  await t.test(`Allow regular image website`, async () => {
    const res = await fastify.inject({
      url: '/user/image',
      method: 'POST',
      headers: authHeaders,
      body: {
        imgUrl: 'https://i.imgflip.com/6upp1a.jpg'
      }
    })

    assert.equal(res.statusCode, 200)
    assert.equal(spy.mock.callCount(), 0)
  })
})
