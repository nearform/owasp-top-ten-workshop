import errors from 'http-errors'
import SQL from '@nearform/sql'

export default async function user(fastify) {
  fastify.get(
    '/',
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
        SQL`SELECT id, username, birth_date FROM users WHERE username = ${username}`
      )

      if (!user) {
        throw new errors.NotFound()
      }
      return user
    }
  )
}
