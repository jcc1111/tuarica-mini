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


Scripts disponibles:
En backend/

pnpm run start:dev – arranca en modo desarrollo

pnpm dlx prisma migrate dev – aplica migraciones

pnpm dlx prisma generate – regenera el cliente Prisma



En frontend/

pnpm run dev – arranca Next.js en desarrollo

pnpm run build – compila para producción

pnpm run start – arranca la versión compilada

tuarica-mini/
├─ backend/      # NestJS + Prisma
└─ frontend/     # Next.js + React

