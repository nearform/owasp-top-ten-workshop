import { join } from 'desm'
import Fastify from 'fastify'
import autoload from '@fastify/autoload'
import fastifyPrintRoutes from 'fastify-print-routes'

/** buildServer
 * @param {{ baseDir: string, env: Object, fastifyOptions: Object, autoloadPlugins: boolean, autoloadRoutes: boolean }} config
 */
export async function buildServer(config) {
  const opts = {
    ...config.fastifyOptions,
    logger: {
      level: config.env.LOG_LEVEL,
      ...(config.env.PRETTY_PRINT && {
        transport: {
          target: 'pino-pretty'
        }
      })
    }
  }

  const fastify = Fastify(opts)

  if (config.env.PRINT_ROUTES) {
    await fastify.register(fastifyPrintRoutes)
  }

  fastify.register(import('@fastify/postgres'), {
    connectionString: config.env.PG_CONNECTION_STRING
  })
  // Authentication plugin (imported manually for options typing)
  fastify.register(import('./plugins/authenticate.js'), config.env)

  if (config.autoloadPlugins) {
    fastify.register(autoload, {
      dir: join(config.baseDir, 'plugins'),
      options: opts
    })
  }

  fastify.register(import('@fastify/cookie'), {
    secret: config.env.COOKIES_SECRET,
    parseOptions: {}
  })

  if (config.autoloadRoutes) {
    fastify.register(autoload, {
      dir: join(config.baseDir, 'routes'),
      options: opts
    })
  }

  if (!config.excludeSharedRoutes) {
    fastify.register(autoload, {
      // Shared routes
      dir: join(import.meta.url, 'routes'),
      options: opts
    })
  }

  fastify.log.info('Fastify is starting up!')

  return fastify
}
