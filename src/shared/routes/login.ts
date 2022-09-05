import errors from 'http-errors'
import { Type } from '@sinclair/typebox'
import { TypedServer } from '../build-server'
import SQL from '@nearform/sql'

const schema = {
  body: Type.Object({
    username: Type.String(),
    password: Type.String()
  }),
  response: {
    200: Type.Object({
      token: Type.String()
    })
  }
}

export default async function login(fastify: TypedServer) {
  fastify.post('/login', { schema }, async req => {
    const { username, password } = req.body

    // sample auth check
    if (username !== password) {
      throw new errors.Unauthorized()
    }

    const {
      rows: [user]
    } = await fastify.pg.query(
      SQL`SELECT id, username FROM users WHERE username = ${username}`
    )

    if (!user) {
      throw new errors.Unauthorized()
    }
    return { token: fastify.jwt.sign({ id: user.id, username: user.username }) }
  })
}
