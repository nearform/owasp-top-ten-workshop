import { Static, Type } from '@sinclair/typebox'
import { TypedServer } from '../build-server'

const UserSchema = Type.Object({
  username: Type.String()
})
export type UserType = Static<typeof UserSchema>

const schema = {
  response: {
    200: Type.Array(UserSchema)
  }
}

export default async function users(fastify: TypedServer) {
  fastify.get('/users', { schema }, async req => {
    req.log.info('Users route called')
    return [{ username: 'alice' }, { username: 'bob' }]
  })
}
