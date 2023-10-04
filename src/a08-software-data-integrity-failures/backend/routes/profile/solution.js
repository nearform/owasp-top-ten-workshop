export default async function solution(fastify) {
  fastify.get('/profile', req => {
    const cookieAsStr = Buffer.from(req.cookies.profile, 'base64').toString(
      'ascii'
    )

    const profile = JSON.parse(cookieAsStr)

    if (profile.username) {
      return 'Hello ' + profile.username
    }

    return 'Hello guest'
  })
}
