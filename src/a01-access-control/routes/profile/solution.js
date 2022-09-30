import errors from 'http-errors'
import SQL from '@nearform/sql'

export default async function solution(fastify) {
  fastify.get(
    '/profile',
    {
      onRequest: [fastify.authenticate]
    },
    async req => {
      if (!req.user) {
        throw new errors.Unauthorized()
      }
      // We get the username from the logged in user, not from the query
      const username = req.user.username
      // if the query username does not match with the user's one, return a 403 Forbidden error
      if (username !== req.query.username) {
        throw new errors.Forbidden()
      }
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
