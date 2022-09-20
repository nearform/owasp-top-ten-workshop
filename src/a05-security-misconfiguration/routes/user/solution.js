import SQL from '@nearform/sql'
import { Type } from '@sinclair/typebox'
import errors from 'http-errors'
import { comparePassword } from '../../../a02-cryptographic-failure/utils/solution.js'

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

export function login(fastify) {
  fastify.post('/login', { schema }, async (req, rep) => {
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

    rep.setCookie('userId', JSON.stringify(user.id), {
      signed: true,
      httpOnly: true
    })
    return 'user logged in'
  })
}

export function profile(fastify) {
  fastify.get('/profile', async req => {
    const { value: id, valid } = fastify.unsignCookie(
      req?.cookies?.userId || ''
    )

    if (!valid) {
      throw new errors.Unauthorized()
    }
    const {
      rows: [user]
    } = await fastify.pg.query(
      SQL`SELECT id, username, age FROM users WHERE id = ${id}`
    )
    if (!user) {
      throw new errors.NotFound()
    }
    return user
  })
}
