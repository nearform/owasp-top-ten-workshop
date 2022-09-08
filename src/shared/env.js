import { join } from 'desm'
import envSchema from 'env-schema'
import { Type } from '@sinclair/typebox'

const EnvSchema = Type.Object({
  PG_CONNECTION_STRING: Type.String(),
  JWT_SECRET: Type.String(),
  LOG_LEVEL: Type.String(),
  PRETTY_PRINT: Type.Boolean(),
  PRINT_ROUTES: Type.Boolean()
})

export const env = envSchema({
  schema: EnvSchema,
  dotenv: { path: join(import.meta.url, '.env') }
})
