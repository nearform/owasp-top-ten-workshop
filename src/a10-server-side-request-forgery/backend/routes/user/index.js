import { getSolutionToExport } from 'owasp-shared/export-solution.js'
import solution from './solution.js'
import axios from 'axios'
import errors from 'http-errors'

function profilePicture(fastify) {
  fastify.post(
    '/user/image',
    {
      onRequest: [fastify.authenticate]
    },
    async req => {
      const imgUrl = req.body.imgUrl
      const { data, status } = await axios.get(imgUrl)
      if (status !== 200) throw errors.BadRequest()
      return data
    }
  )
}

export default getSolutionToExport(profilePicture, solution)
