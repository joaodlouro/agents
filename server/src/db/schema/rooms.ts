
import { pgTable, text,timestamp, uuid } from "drizzle-orm/pg-core";

import { questions } from "./questions.ts";

export const rooms = pgTable("rooms", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  createdAT: timestamp().defaultNow().notNull(),
});

