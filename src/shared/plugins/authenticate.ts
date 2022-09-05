import { TypedServer } from '../build-server'
import fp from 'fastify-plugin'

export type AuthenticatePluginOptions = {
  JWT_SECRET: string
}

export interface AuthenticatePlugin {
  (req: any, res: any): Promise<void>
}

declare module 'fastify' {
  interface FastifyInstance {
    authenticate: AuthenticatePlugin
  }
}

async function authenticate(
  fastify: TypedServer,
  options: AuthenticatePluginOptions
) {
  fastify.register(import('@fastify/jwt'), {
    secret: options.JWT_SECRET
  })

  fastify.decorate('authenticate', async (req: any, reply: any) => {
    try {
      await req.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
}

;(authenticate as any)[Symbol.for('skip-override')] = true

export default fp(authenticate, {
  fastify: '4.x',
  name: 'authenticate'
})
