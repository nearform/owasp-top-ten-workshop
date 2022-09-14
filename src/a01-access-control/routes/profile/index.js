import errors from 'http-errors'
import SQL from '@nearform/sql'
import solution from './solution.js'
import { getSolutionToExport } from 'owasp-shared/export-solution.js'

function profile(fastify) {
  fastify.get(
    '/profile',
    {
      onRequest: [fastify.authenticate]
    },
    async req => {
      if (!req.user) {
        throw new errors.Unauthorized()
      }
      const { username } = req.query
      const {
        rows: [user]
      } = await fastify.pg.query(
        SQL`SELECT id, username, age FROM users WHERE username = ${username}`
      )

      if (!user) {
        throw new errors.NotFound()
      }
      return user
    }
  )
}

// Note: This helper just helps with internal unit testing
export default getSolutionToExport(profile, solution)
