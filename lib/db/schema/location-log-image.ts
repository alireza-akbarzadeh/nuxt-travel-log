import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { locationLog } from "~/lib/db/schema/location-log";

export const locationLogImage = sqliteTable("locationLogImage", {

  id: int().primaryKey({ autoIncrement: true }),
  key: text().notNull(),
  description: text(),
  locationLogId: int().notNull().references(() => locationLog.id),
  created_at: int().notNull().$default(() => Date.now()),
  updated_at: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
