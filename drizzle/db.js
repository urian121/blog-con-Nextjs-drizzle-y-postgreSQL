import { drizzle } from 'drizzle-orm/pg'; // Importar drizzle
import { Pool } from 'pg'; // Importar Pool de pg
import * as schema from './schema'; // Importar el esquema

// Crear una instancia de Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });