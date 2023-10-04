export default async function solution(fastify) {
  fastify.post(
    '/buy-product',
    {
      config: {
        rateLimit: {
          max: 2,
          timeWindow: '1 minute'
        }
      }
    },
    (req, reply) => {
      reply.send({ success: true })
    }
  )
}
