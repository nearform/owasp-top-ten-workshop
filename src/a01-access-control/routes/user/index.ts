import errors from 'http-errors'
import { Type } from '@sinclair/typebox'
import { TypedServer } from '@/shared/build-server'
import SQL from '@nearform/sql'

const schema = {
  body: Type.Object({
    username: Type.String()
  }),
  response: {
    200: Type.Object({
      username: Type.String()
    })
  }
}

export default async function user(fastify: TypedServer) {
  fastify.get(
    '/',
    {
      onRequest: [fastify.authenticate],
      schema
    },
    async req => {
      const { username } = req.body
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
