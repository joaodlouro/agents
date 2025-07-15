import fastifyCors from '@fastify/cors';
import fastify from 'fastify';
import { env } from './env.ts';


import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import { getRoomsRoute } from './http/roules/get-rooms.ts';




const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: 'http://localhost:3000',
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get('/health', () => {
  return 'OK';
});

app.register(getRoomsRoute)


app.listen({ port: env.Port });
