import { getSolutionToExport } from 'owasp-shared/export-solution.js'
import { request } from 'undici-5.8.0'
import solution from './solution.js'

async function profile(fastify) {
  fastify.get(
    '/profile',
    {
      onRequest: [fastify.authenticate]
    },
    async req => {
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

export default getSolutionToExport(profile, solution)
