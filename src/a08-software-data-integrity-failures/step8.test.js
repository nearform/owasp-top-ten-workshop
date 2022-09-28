import t from 'tap'
import { step8Server } from './server.js'

const { test } = t

test('A08: Software and Data Integrity Failures', async t => {
  let fastify

  t.beforeEach(async () => {
    fastify = await step8Server()
  })

  t.teardown(() => fastify.close())

  t.test(`Should parse request cookie properly`, async t => {
    const cookieWithMaliciousCode =
      'profile=eyJpZCI6MSwidXNlcm5hbWUiOiJfJCRORF9GVU5DJCRfZnVuY3Rpb24gKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2VydmVyIGVycm9yJylcbiAgfSgpIn0='

    const res = await fastify.inject({
      url: '/profile',
      method: 'GET',
      headers: {
        Cookie: cookieWithMaliciousCode
      }
    })

    t.equal(res.statusCode, 200)
  })
})
