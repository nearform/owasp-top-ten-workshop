import errors from 'http-errors'
import { Type } from '@sinclair/typebox'
import SQL from '@nearform/sql'
import { faker } from '@faker-js/faker'
import { hashPassword } from '../../a02-cryptographic-failure/backend/utils/crypto.js'

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

export default async function register(fastify) {
  fastify.post('/register', { schema }, async req => {
    const { username, password } = req.body
    const birthDate = faker.date.past()
    const hashedPassword = await hashPassword(password)
    const creditCardNumber = faker.finance.creditCardNumber()
    const {
      rows: [user]
    } = await fastify.pg.query(
      SQL`INSERT INTO users (username, password, age, credit_card_number) VALUES (${username}, ${hashedPassword}, ${birthDate.toISOString()}, ${creditCardNumber}) RETURNING id, username`
    )

    if (!user) {
      throw errors.InternalServerError()
    }
    return { token: fastify.jwt.sign({ id: user.id, username: user.username }) }
  })
}
