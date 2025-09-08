module.exports = {
  schema: "./drizzle/schema.js",  // Ruta del esquema
  out: "./drizzle/migrations",    // Guardar migraciones en una subcarpeta
  dialect: "postgresql",
  dbCredentials: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT || 5432,
  }
}