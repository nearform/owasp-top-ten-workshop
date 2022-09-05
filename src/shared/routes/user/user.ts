import { Type } from '@sinclair/typebox'
import { TypedServer } from '../../build-server'

const schema = {
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
    async req => req.user
  )
}
