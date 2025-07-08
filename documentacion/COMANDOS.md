# Comandos Útiles del Proyecto

Este documento recopila los comandos principales para trabajar con el frontend (Next.js), backend (NestJS) y la base de datos (Prisma) en este proyecto.

---

## Frontend (Next.js)

- **Levantar servidor de desarrollo:**
  ```sh
  pnpm dev
  ```
- **Instalar dependencias:**
  ```sh
  pnpm install
  ```
- **Build de producción:**
  ```sh
  pnpm build
  ```
- **Iniciar en modo producción:**
  ```sh
  pnpm start
  ```

---

## Backend (NestJS)

- **Levantar servidor de desarrollo:**
  ```sh
  pnpm dev
  ```
- **Instalar dependencias:**
  ```sh
  pnpm install
  ```
- **Build de producción:**
  ```sh
  pnpm build
  ```
- **Iniciar en modo producción:**
  ```sh
  pnpm start
  ```

---

## Prisma (ORM y base de datos)

- **Ejecutar migraciones y actualizar la base de datos (usando pnpm y scripts directos):**
  ```sh
  pnpm --filter backend prisma:migrate
  ```
- **Abrir Prisma Studio (interfaz gráfica, recomendado):**
  ```sh
  pnpm --filter backend prisma:studio
  ```
- **Generar el cliente Prisma:**
  ```sh
  pnpm --filter backend prisma:generate
  ```
- **Ejecutar el seed para poblar la base de datos:**
  ```sh
  pnpm --filter backend prisma:seed
  ```

### Docker Compose para Postgres

- **Levantar base de datos Postgres en Docker:**
  ```sh
  docker compose up -d
  ```
- **Detener los contenedores:**
  ```sh
  docker compose down
  ```

### Notas sobre Prisma Studio y Docker

- Prisma Studio puede conectarse a la base de datos de Docker si la variable de entorno `DATABASE_URL` apunta al contenedor.
- Puedes usar herramientas como PgAdmin o DBeaver conectando a `localhost:5432` (usuario, contraseña y base según tu `.env`).
- Si cambias datos con el seed, actualiza Prisma Studio recargando la página.

---

## Otros comandos útiles

- **Limpiar la caché de Next.js:**
  ```sh
  rm -rf .next
  ```
- **Limpiar la carpeta dist del backend:**
  ```sh
  rm -rf dist
  ```

---

Actualiza este archivo si agregas nuevos scripts, herramientas o comandos personalizados.
