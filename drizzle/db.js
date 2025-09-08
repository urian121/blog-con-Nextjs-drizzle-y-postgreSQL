import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema.js';
import { sql } from 'drizzle-orm';

// Crear la instancia de Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

// Exportar la instancia de drizzle
export const db = drizzle(pool, { schema });


// Función para verificar la conexión
export async function testConnection() {
  try {
    // Ejecuta una consulta SQL simple
    await db.execute(sql`SELECT 1`);
    console.log('✅ Conexión a la base de datos exitosa');
    return true;
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error.message);
    return false;
  }
}