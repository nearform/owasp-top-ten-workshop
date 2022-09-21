import { createServer } from 'http'

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

export function startTargetServer() {
  return createServer((_, res) => {
    res.writeHead(200)
    res.end('You found the secret')
  }).listen(80)
}
