import { testConnection } from './drizzle/db.js';

async function main() {
  console.log('🔍 Probando conexión a la base de datos...');
  const isConnected = await testConnection();
  if (isConnected) {
    console.log('✅ ¡Conexión exitosa!');
  } else {
    console.log('❌ No se pudo conectar a la base de datos');
  }
  process.exit(0);
}

main().catch(console.error);
