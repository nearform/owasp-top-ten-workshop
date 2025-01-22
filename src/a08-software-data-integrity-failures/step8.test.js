import { test } from 'node:test'
import assert from 'node:assert/strict'
import { step8Server } from './server.js'

test('A08: Software and Data Integrity Failures', async t => {
  let fastify

  t.beforeEach(async () => {
    fastify = await step8Server()
  })

  t.after(() => fastify.close())

  await t.test(`Should parse request cookie properly`, async () => {
    const cookieWithMaliciousCode =
      'profile=eyJpZCI6MSwidXNlcm5hbWUiOiJfJCRORF9GVU5DJCRfZnVuY3Rpb24gKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2VydmVyIGVycm9yJylcbiAgfSgpIn0='

    const res = await fastify.inject({
      url: '/profile',
      method: 'GET',
      headers: {
        Cookie: cookieWithMaliciousCode
      }
    })

    assert.equal(res.statusCode, 200)
  })
})
