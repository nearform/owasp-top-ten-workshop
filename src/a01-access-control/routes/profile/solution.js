import errors from 'http-errors'
import SQL from '@nearform/sql'

export default async function solution(fastify) {
  fastify.get(
    '/',
    {
      onRequest: [fastify.authenticate]
    },
    async req => {
      if (!req.user) {
        throw new errors.Unauthorized()
      }
      // We get the username from the logged in user, not from the query
      const username = req.user.username
      const {
        rows: [user]
      } = await fastify.pg.query(
        SQL`SELECT id, username, birth_date FROM users WHERE username = ${username}`
      )

      if (!user) {
        throw new errors.NotFound()
      }
      return user
    }
  )
}
