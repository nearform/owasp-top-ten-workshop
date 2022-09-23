import solution from './solution.js'
import { getSolutionToExport } from 'owasp-shared/export-solution.js'

async function ecommerce(fastify) {
  fastify.post('/buy-product', (req, reply) => {
    reply.send({ success: true })
  })
}

// Note: This helper just helps with internal unit testing
export default getSolutionToExport(ecommerce, solution)
