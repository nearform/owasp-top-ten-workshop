import t from 'tap'
import FakeTimers from '@sinonjs/fake-timers'
import { step4Server } from './server.js'

const { test } = t

test('A04: Insecure Design', async t => {
  let fastify

  t.beforeEach(async () => {
    fastify = await step4Server()
  })

  t.teardown(() => fastify.close())

  t.test(
    `doesn't allow too many requests in a row within the rate limit`,
    async t => {
      t.context.clock = FakeTimers.install()

      let res

      res = await fastify.inject({ url: '/buy-product', method: 'POST' })
      t.equal(res.statusCode, 200)

      res = await fastify.inject({ url: '/buy-product', method: 'POST' })
      t.equal(res.statusCode, 200)

      res = await fastify.inject({ url: '/buy-product', method: 'POST' })
      t.equal(res.statusCode, 429) // after two attempts within one minute, the user is blocked by rate limit

      t.context.clock.tick(1100 * 60) //time progresses a little over a minute forward

      res = await fastify.inject({ url: '/buy-product', method: 'POST' })

      t.equal(res.statusCode, 200) // user can make a request again

      t.teardown(() => {
        t.context.clock.uninstall()
      })
    }
  )
})
