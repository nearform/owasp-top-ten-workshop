import { createServer } from 'http'

export function startTargetServer() {
  createServer((_, res) => {
    res.writeHead(200)
    res.end('You found the secret')
  }).listen(80)
}
