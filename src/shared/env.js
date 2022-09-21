import { join } from 'desm'
import envSchema from 'env-schema'
import { Type } from '@sinclair/typebox'

const EnvSchema = Type.Object({
  PG_CONNECTION_STRING: Type.String(),
  JWT_SECRET: Type.String(),
  LOG_LEVEL: Type.String(),
  PRETTY_PRINT: Type.Boolean(),
  PRINT_ROUTES: Type.Boolean(),
  USE_SOLUTION: Type.Boolean(),
  COOKIES_SECRET: Type.String()
})

export const env = envSchema({
  schema: EnvSchema,
  dotenv: { path: join(import.meta.url, '.env') }
})
