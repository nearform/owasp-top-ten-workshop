import solution from './solution.js'
import { getSolutionToExport } from 'owasp-shared/export-solution.js'
import serialize from 'node-serialize'

function profile(fastify) {
  fastify.get('/profile', req => {
    const cookieAsStr = Buffer.from(req.cookies.profile, 'base64').toString(
      'ascii'
    )

    const profile = serialize.unserialize(cookieAsStr)

    if (profile.username) {
      return 'Hello ' + profile.username
    }

    return 'Hello guest'
  })
}

// Note: This helper just helps with internal unit testing
export default getSolutionToExport(profile, solution)
