module.exports = {
  schema: "./drizzle/schema.js",  // Ruta del esquema
  out: "./drizzle/migrations",    // Guardar migraciones en una subcarpeta
  dialect: "postgresql",
  dbCredentials: {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT || 5432,
    ssl: false,
  }
}