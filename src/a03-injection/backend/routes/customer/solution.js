import SQL from '@nearform/sql'
import errors from 'http-errors'

export default async function customer(fastify) {
  fastify.get(
    '/customer',
    {
      onRequest: [fastify.authenticate]
    },
    async req => {
      const { name } = req.query
      const { rows: customers } = await fastify.pg.query(
        SQL`SELECT * FROM customers WHERE name=${name}` // SQL function from @nearform/sql
      )
      if (!customers.length) throw errors.NotFound()
      return customers
    }
  )
}
