# tuarica-mini

Mini-proyecto de TuArica que demuestra un backend en NestJS + Prisma + PostgreSQL y un frontend en Next.js + React, todo en TypeScript estricto.

## Contenido

- **backend/**: API NestJS con Prisma ORM  
- **frontend/**: App Next.js + React consumiendo la API  

## Requisitos

- Node.js ≥ 18  
- pnpm ≥ 10  
- PostgreSQL (tuarica_db)  
- Git

## Instalación

1. Clona el repo  
   ```bash
   git clone https://github.com/jcc1111/tuarica-mini.git
   cd tuarica-mini
   ```

2. Instala las dependencias  
   ```bash
   pnpm install
   ```

3. Configura la base de datos  
   - Crea una base de datos PostgreSQL llamada `tuarica_db`.
   - Copia `backend/.env.example` a `.env` y ajusta las variables de entorno según tu configuración.

4. Ejecuta las migraciones y genera el cliente de Prisma  
   ```bash
   pnpm dlx prisma migrate dev
   pnpm dlx prisma generate
   ```

5. Inicia el servidor en modo desarrollo  
   ```bash
   pnpm run start:dev
   ```

6. En otra terminal, inicia el frontend en modo desarrollo  
   ```bash
   pnpm --filter frontend dev
   ```

Scripts disponibles:
En backend/

pnpm run start:dev – arranca en modo desarrollo

pnpm dlx prisma migrate dev – aplica migraciones

pnpm dlx prisma generate – regenera el cliente Prisma



En frontend/

pnpm run dev – arranca Next.js en desarrollo

pnpm run build – compila para producción

pnpm run start – arranca la versión compilada

## Notas de entorno y dependencias

- El monorepo usa pnpm workspaces y Turborepo. Ejecuta `pnpm install` en la raíz para instalar todo.
- Usa `pnpm dev` para levantar frontend y backend en paralelo.
- Requisito: pnpm ≥ 8.
- Variables de entorno de ejemplo en `backend/.env.example` y `frontend/.env.local.example`.
- En Windows, la variable PORT se maneja con cross-env para compatibilidad.
- Para desarrollo, asegúrate de tener los tipos de React, Next y Node instalados (ya automatizado).
- Si ves errores de PrismaClient, ejecuta `pnpm --filter backend prisma:generate`.
- Si usas Docker Compose, puedes levantar todo el stack (DB + API + UI) con `docker compose up --build`.

tuarica-mini/
├─ backend/      # NestJS + Prisma
└─ frontend/     # Next.js + React

