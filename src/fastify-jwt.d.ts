import '@fastify/jwt'

declare module '@fastify/jwt' {
  interface FastifyJWT {
    payload: { id: string; username: string } // payload type is used for signing and verifying
    user: {
      id: string
      username: string
    } // user type is return type of `request.user` object
  }
}
