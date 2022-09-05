import { join } from 'desm'
import envSchema from 'env-schema'
import { Static, Type } from '@sinclair/typebox'

const EnvSchema = Type.Object({
  PG_CONNECTION_STRING: Type.String(),
  JWT_SECRET: Type.String()
})
export type EnvType = Static<typeof EnvSchema>

export const env = envSchema<EnvType>({
  schema: EnvSchema,
  dotenv: { path: join(import.meta.url, '.env') }
})

console.log(env)
