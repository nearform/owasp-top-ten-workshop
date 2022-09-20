import solution from './solution.js'
import { getSolutionToExport } from 'owasp-shared/export-solution.js'

async function movieTheater(fastify) {
  fastify.post('/book-seat', (req, reply) => {
    reply.send({ isBooked: true })
  })
}

// Note: This helper just helps with internal unit testing
export default getSolutionToExport(movieTheater, solution)
