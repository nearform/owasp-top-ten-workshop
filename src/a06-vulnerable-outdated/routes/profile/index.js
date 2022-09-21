import { getSolutionToExport } from 'owasp-shared/export-solution.js'
import { request } from 'undici-vulnerable'
import solution from './solution.js'
import errors from 'http-errors'
import { createServer } from 'http'

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

export function startTargetServer() {
  createServer((_, res) => {
    res.writeHead(200)
    res.end('You found the secret')
  }).listen(80)
}
