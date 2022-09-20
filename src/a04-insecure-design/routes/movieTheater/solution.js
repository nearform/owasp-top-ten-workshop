export default async function solution(fastify) {
  fastify.post(
    '/book-seat',
    {
      config: {
        rateLimit: {
          max: 2,
          timeWindow: '1 minute'
        }
      }
    },
    (req, reply) => {
      reply.send({ isBooked: true })
    }
  )
}
