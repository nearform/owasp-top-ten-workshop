import { request } from 'undici'
import errors from 'http-errors'

export default function (fastify) {
  fastify.get(
    '/profile',
    {
      onRequest: [fastify.authenticate]
    },
    async req => {
      const { username } = req.query
      const { body, statusCode } = await request({
        origin: 'http://example.com',
        pathname: username
      })
      if (statusCode !== 200) {
        throw errors.NotFound()
      }
      return body
    }
  )
}
