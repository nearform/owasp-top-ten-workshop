import solution from './solution.js'
import { getSolutionToExport } from 'owasp-shared/export-solution.js'
import errors from 'http-errors'

async function customer(fastify) {
  fastify.get(
    '/customer',
    {
      onRequest: [fastify.authenticate]
    },
    async req => {
      const { name } = req.query
      const { rows: customers } = await fastify.pg.query(
        `SELECT * FROM customers WHERE name='${name}'`
      )
      if (!customers.length) throw errors.NotFound()
      return customers
    }
  )
}

// Note: This helper just helps with internal unit testing
export default getSolutionToExport(customer, solution)
