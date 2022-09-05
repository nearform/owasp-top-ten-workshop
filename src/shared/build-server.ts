import { join } from 'desm'
import Fastify, { FastifyServerOptions } from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import autoload from '@fastify/autoload'
import { EnvType } from '../env'

export interface ServerConfig {
  baseDir: string
  env: EnvType
  fastifyOptions: FastifyServerOptions
}

export function buildServer(config: ServerConfig) {
  const opts: FastifyServerOptions = {
    ...config.fastifyOptions
  }

  const fastify = Fastify(opts).withTypeProvider<TypeBoxTypeProvider>()

  fastify.register(import('@fastify/postgres'), {
    connectionString: config.env.PG_CONNECTION_STRING
  })
  // Authentication plugin (imported manually for options typing)
  fastify.register(import('./plugins/authenticate'), config.env)

  fastify.register(autoload, {
    dir: join(config.baseDir, 'plugins'),
    options: opts
  })

  fastify.register(autoload, {
    dir: join(config.baseDir, 'routes'),
    options: opts
  })

  fastify.register(autoload, {
    // Shared routes
    dir: join(import.meta.url, 'routes'),
    options: opts
  })

  fastify.log.info('Fastify is starting up!')

  return fastify
}

export type TypedServer = ReturnType<typeof buildServer>
