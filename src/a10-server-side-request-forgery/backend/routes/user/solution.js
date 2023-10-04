import axios from 'axios'
import errors from 'http-errors'
import SQL from '@nearform/sql'

export default async function profilePicture(fastify) {
  fastify.post(
    '/user/image',
    {
      onRequest: [fastify.authenticate]
    },
    async req => {
      const { imgUrl } = req.body
      const url = validateUrl(imgUrl)
      const {
        rows: [whitelisted]
      } = await fastify.pg.query(
        SQL`SELECT * FROM allowedImageDomain WHERE hostname = ${url.hostname}`
      )
      if (!whitelisted) {
        throw errors.Forbidden()
      }
      const { data } = await axios.get(url.href)
      return data
    }
  )
}

function validateUrl(imgUrl) {
  try {
    return new URL(imgUrl)
  } catch (error) {
    throw error.BadRequest()
  }
}
