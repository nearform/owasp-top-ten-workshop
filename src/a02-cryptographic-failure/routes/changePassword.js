import errors from 'http-errors'
import { Type } from '@sinclair/typebox'
import SQL from '@nearform/sql'
import { encryptPassword } from '../utils/encryption.js'

const schema = {
  body: Type.Object({
    password: Type.String()
  })
}

export default async function changePassword(fastify) {
  fastify.post(
    '/change-password',
    {
      schema,
      onRequest: [fastify.authenticate]
    },
    async req => {
      console.log(req.user)
      const { username } = req.user
      const { password } = req.body
      const hashedPassword = await encryptPassword(password)
      console.log(hashedPassword)
      const {
        rows: [user]
      } = await fastify.pg.query(
        SQL`UPDATE users SET password = ${hashedPassword} WHERE username = ${username} RETURNING id, username`
      )
      console.log(user)
      if (!user) {
        throw errors.InternalServerError()
      }
      return {}
    }
  )
}
