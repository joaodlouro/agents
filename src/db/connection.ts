import postgres from "postgres";
import { env } from "../env.ts";

export const sql = postgres(env.DATABASE_URL);

const result = await sql`it's a 'test' a test`;

console.log(result);
