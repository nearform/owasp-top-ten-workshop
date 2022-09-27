import axios from 'axios'
import errors from 'http-errors'

export default function profilePicture(fastify) {
  fastify.post(
    '/user/image',
    {
      onRequest: [fastify.authenticate]
    },
    async req => {
      const imgUrl = req.body.imgUrl
      const res = await axios.get(imgUrl)
      if (res.statusCode !== 200) throw errors.BadRequest()
      return res
    }
  )
}
