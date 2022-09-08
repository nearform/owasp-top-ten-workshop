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
