// Importar las funciones de drizzle-orm
import { pgTable, serial, text, varchar, timestamp } from 'drizzle-orm/pg-core';

// Definir la tabla posts
export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256 }).notNull(),
  author: varchar('author', { length: 256 }).notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  content: text('content').notNull(),
});