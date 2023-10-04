import { getSolutionToExport } from 'owasp-shared/export-solution.js'
import { request } from 'undici-5.8.0'
import solution from './solution.js'
import errors from 'http-errors'

async function profile(fastify) {
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

export default getSolutionToExport(profile, solution)
