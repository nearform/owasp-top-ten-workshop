import errors from 'http-errors'
import { Type } from '@sinclair/typebox'
import SQL from '@nearform/sql'
import { comparePassword } from '../../a02-cryptographic-failure/utils/crypto.js'

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

export default async function login(fastify) {
  fastify.post('/login', { schema }, async req => {
    const { username, password } = req.body

    const {
      rows: [user]
    } = await fastify.pg.query(
      SQL`SELECT id, username, password FROM users WHERE username = ${username}`
    )

    if (!user) {
      throw errors.Unauthorized('No matching user found')
    }
    const passwordMatch = await comparePassword(password, user.password)
    if (!passwordMatch) {
      throw errors.Unauthorized('Invalid Password')
    }
    return { token: fastify.jwt.sign({ id: user.id, username: user.username }) }
  })
}
