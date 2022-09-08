import fp from 'fastify-plugin'

async function authenticate(fastify, options) {
  fastify.register(import('@fastify/jwt'), {
    secret: options.JWT_SECRET
  })

  fastify.decorate('authenticate', async (req, reply) => {
    try {
      await req.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
}

authenticate[Symbol.for('skip-override')] = true

export default fp(authenticate, {
  fastify: '4.x',
  name: 'authenticate'
})
