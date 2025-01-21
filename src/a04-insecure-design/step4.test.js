import { test } from 'node:test'
import assert from 'node:assert/strict'
import { step4Server } from './server.js'

test('A04: Insecure Design', async t => {
  let fastify

  t.beforeEach(async () => {
    fastify = await step4Server()
  })

  t.after(() => fastify.close())

  await t.test(
    `doesn't allow too many requests in a row within the rate limit`,
    async t => {
      t.mock.timers.enable()

      let res

      res = await fastify.inject({ url: '/buy-product', method: 'POST' })
      assert.equal(res.statusCode, 200)

      res = await fastify.inject({ url: '/buy-product', method: 'POST' })
      assert.equal(res.statusCode, 200)

      res = await fastify.inject({ url: '/buy-product', method: 'POST' })
      assert.equal(res.statusCode, 429) // after two attempts within one minute, the user is blocked by rate limit

      t.mock.timers.tick(1100 * 60) //time progresses a little over a minute forward

      res = await fastify.inject({ url: '/buy-product', method: 'POST' })

      assert.equal(res.statusCode, 200) // user can make a request again

      t.after(() => {
        t.mock.reset()
      })
    }
  )
})
