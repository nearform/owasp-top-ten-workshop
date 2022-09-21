import {
  login as solutionLogin,
  profile as solutionProfile
} from './solution.js'
import { getSolutionToExport } from 'owasp-shared/export-solution.js'
import errors from 'http-errors'
import { Type } from '@sinclair/typebox'
import SQL from '@nearform/sql'
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

function login(fastify) {
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

    rep.setCookie('userId', user.id, { signed: false })
    return 'user logged in'
  })
}

function profile(fastify) {
  fastify.get('/profile', async req => {
    if (!req.cookies?.userId) {
      throw new errors.Unauthorized()
    }
    const id = req.cookies.userId
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

export const loginRoute = getSolutionToExport(login, solutionLogin)
export const profileRoute = getSolutionToExport(profile, solutionProfile)
