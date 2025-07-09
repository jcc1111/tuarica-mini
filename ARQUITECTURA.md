# Notas técnicas y de entorno

## Notas de entorno y dependencias

- El monorepo usa pnpm workspaces y Turborepo. Ejecuta `pnpm install` en la raíz para instalar todo.
- Usa `pnpm dev` para levantar frontend y backend en paralelo.
- Requisito: pnpm ≥ 8.
- Variables de entorno de ejemplo en `backend/.env.example` y `frontend/.env.local.example`.
- En Windows, la variable PORT se maneja con cross-env para compatibilidad.
- Para desarrollo, asegúrate de tener los tipos de React, Next y Node instalados (ya automatizado).
- Si ves errores de PrismaClient, ejecuta `pnpm --filter backend prisma:generate`.
- Si usas Docker Compose, puedes levantar todo el stack (DB + API + UI) con `docker compose up --build`.