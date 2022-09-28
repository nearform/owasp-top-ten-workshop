import t from 'tap'
import { step10Server } from './server.js'
import { authHeaders, startTargetServer } from 'owasp-shared'
import sinon from 'sinon'

const { test } = t

test('A10: Server side request forgery', async t => {
  let fastify
  const spy = sinon.spy()
  const targetServer = await startTargetServer(spy)

  t.beforeEach(async () => {
    fastify = await step10Server()
  })

  t.teardown(() => {
    fastify.close()
    targetServer.close()
  })

  t.test(`SSRF should be not exploitable`, async t => {
    const res = await fastify.inject({
      url: '/user/image',
      method: 'POST',
      headers: authHeaders,
      body: {
        imgUrl: 'http://localhost:3001/secret'
      }
    })
    t.equal(res.statusCode, 403)
    t.equal(spy.callCount, 0)
  })

  t.test(`Allow regular image website`, async t => {
    const res = await fastify.inject({
      url: '/user/image',
      method: 'POST',
      headers: authHeaders,
      body: {
        imgUrl: 'https://i.imgflip.com/6upp1a.jpg'
      }
    })
    t.equal(res.statusCode, 200)
    t.equal(spy.callCount, 0)
  })
})
