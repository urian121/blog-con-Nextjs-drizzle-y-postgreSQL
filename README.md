# Blog Moderno con Next.js, Drizzle y PostgreSQL

Un sistema de gestión de contenido (CMS) para blogs moderno, rápido y escalable, desarrollado con tecnologías de vanguardia. Esta aplicación permite a los usuarios crear, leer, actualizar y eliminar publicaciones de blog de manera intuitiva, con una interfaz de usuario limpia y responsiva.

![Demo](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/refs/heads/master/blog-moderno-con-Nextjs-drizzle-y-PostgreSQL.png)

## 🌟 Características Principales

- **Interfaz de Usuario Moderna**: Diseño responsivo que se adapta a cualquier dispositivo móvil o de escritorio.
- **Gestión Completa de Contenidos**: CRUD (Crear, Leer, Actualizar, Eliminar) de artículos del blog.
- **Rendimiento Óptimo**: Desarrollado con Next.js para renderizado del lado del servidor (SSR) y generación estática (SSG).
- **Base de Datos Robusta**: Utiliza PostgreSQL como base de datos principal con Drizzle ORM para un manejo de datos seguro y eficiente.
- **API RESTful**: Endpoints bien definidos para integración con otros servicios o aplicaciones.
- **Autenticación y Autorización**: Sistema seguro de gestión de usuarios (próximamente).
- **Búsqueda y Filtrado**: Búsqueda de artículos por título, autor o contenido (próximamente).
- **Categorías y Etiquetas**: Organización de contenido mediante categorías y etiquetas (próximamente).

## 🛠️ Tecnologías Utilizadas

- **Frontend**: 
  - Next.js 15+ con App Router
  - React 18+
  - Bootstrap 5 para estilos responsivos
  - Bootstrap Icons para iconografía

- **Backend**:
  - API Routes de Next.js
  - Drizzle ORM para la capa de base de datos
  - PostgreSQL como base de datos relacional

- **Herramientas de Desarrollo**:
  - Node.js 18+
  - npm / Yarn
  - Git para control de versiones

## 🚀 Empezando

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/urian121/blog-con-Nextjs-drizzle-y-postgreSQL
   cd blog-con-Nextjs-drizzle-y-postgreSQL
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```env
   DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombre_base_datos?schema=public"
   ```

4. Crea y aplica las migraciones a la base de datos:
   ```bash
   # Genera las migraciones basadas en el esquema
   npm run db:generate
   
   # Aplica las migraciones a la base de datos
   npm run db:push
   ```

5. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

### Comandos útiles de Drizzle

- `npm run db:generate`: Genera archivos de migración basados en los cambios del esquema
- `npm run db:push`: Aplica los cambios del esquema directamente a la base de datos
- `npm run db:studio`: Abre el cliente visual de Drizzle para explorar la base de datos

5. Abre tu navegador en [http://localhost:3000](http://localhost:3000)

## 🏗️ Estructura del Proyecto

```
/src
  /app
    /api           # Rutas de la API
    /components    # Componentes reutilizables
    /styles        # Estilos globales
  /drizzle        # Configuración de Drizzle ORM
  /public         # Archivos estáticos
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes sugerencias o encuentras algún problema, por favor abre un issue o envía un pull request.

## 📬 Contacto

- **Autor**: Urian Viera
- **Email**: urian1213viera@gmail.com
