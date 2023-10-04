import { request } from 'undici'
import errors from 'http-errors'

export default function profile(fastify) {
  fastify.get(
    '/profile',
    {
      onRequest: [fastify.authenticate]
    },
    async req => {
      console.log({
        username: req.user.username,
        input: req.headers['content-type']
      })

      const headerCharRegex = /[^\t\x20-\x7e\x80-\xff]/

      if (headerCharRegex.exec(req.headers['content-type']) !== null) {
        throw errors.BadRequest()
      }

      const { body } = await request('http://localhost:3001', {
        method: 'GET',
        headers: {
          'content-type': req.headers['content-type']
        }
      })
      return body
    }
  )
}
