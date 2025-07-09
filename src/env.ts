import {z} from 'zod';
const envSchema = z.object({
  Port: z.coerce.number().default(3000),
});

export const env= envSchema.parse(process.env);

env.Port
