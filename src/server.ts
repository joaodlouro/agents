import fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import {sql} from './db/connection.ts';
import { env } from './env.ts';


import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod';




const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: 'http://localhost:3000',
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get('/health', () => {
  return 'OK';
});


app.listen({ port: env.Port });
