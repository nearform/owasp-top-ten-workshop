import { Type } from '@sinclair/typebox'
import errors from 'http-errors'
import SQL from '@nearform/sql'
import { faker } from '@faker-js/faker'
import { hashPassword } from '../../../a02-cryptographic-failure/utils/crypto.js'

const schema = {
  body: Type.Object({
    username: Type.String(),
    password: Type.String()
  }),
  response: {
    200: Type.Object({
      token: Type.String()
    }),
    400: Type.Object({
      message: Type.String()
    })
  }
}

export function register(fastify) {
  fastify.post('/register', { schema }, async (req, res) => {
    const { username, password } = req.body
    const age = faker.datatype.number({ min: 12, max: 85 })
    const hashedPassword = await hashPassword(password)
    const creditCardNumber = faker.finance.creditCardNumber('#'.repeat(16))

    const {
      rows: [breach]
    } = await fastify.pg.query(
      SQL`SELECT * FROM databreachrecords WHERE password=${password}`
    )

    if (breach) {
      res.send(
        errors.BadRequest(
          `You are trying to use password that is known to be exposed in data breaches: ${breach.source}. Use a different one. Read more here: https://haveibeenpwned.com/Passwords.`
        )
      )
    }

    const {
      rows: [user]
    } = await fastify.pg.query(
      SQL`INSERT INTO users (username, password, age, credit_card_number) VALUES (${username}, ${hashedPassword}, ${age}, ${creditCardNumber}) RETURNING id, username`
    )

    if (!user) {
      throw errors.InternalServerError()
    }
    return { token: fastify.jwt.sign({ id: user.id, username: user.username }) }
  })
}
