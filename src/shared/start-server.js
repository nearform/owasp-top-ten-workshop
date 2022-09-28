import Fastify from 'fastify'

export async function startServer(fastify) {
  console.log('Starting server')
  try {
    console.log('Listening on port 3000')
    await fastify.listen({ port: 3000 })
    console.log('Fastify server is running')
  } catch (err) {
    console.error(err)
    fastify.log.error(err)
    process.exit(1)
  }
}

export async function startTargetServer(spy) {
  const fastify = Fastify()
  try {
    fastify.get('/', () => {
      return { message: 'Hello world!' }
    })

    fastify.get('/secret', () => {
      spy()
      const message = 'something suspicious is happening'
      console.log(message)
      return { message }
    })
    await fastify.listen({ port: 3001 })
    return fastify
  } catch (err) {
    console.error(err)
    fastify.log.error(err)
    process.exit(1)
  }
}
