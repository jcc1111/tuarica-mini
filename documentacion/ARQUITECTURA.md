# ARQUITECTURA DEL PROYECTO

Este documento describe la arquitectura general del proyecto, las tecnologías principales utilizadas y las decisiones técnicas clave.

---

## 1. Descripción General

El proyecto está compuesto por dos aplicaciones principales:

- **Frontend:** Next.js (React) para la interfaz de usuario.
- **Backend:** NestJS (Node.js) para la API y lógica de negocio.
- **Base de datos:** PostgreSQL, gestionada a través de Prisma ORM.
- **Monorepo:** pnpm workspaces y Turborepo para gestión centralizada de dependencias, scripts y builds.

---

## 2. Estructura de Carpetas

```
/tuarica-mini
│
├── backend/         # API RESTful con NestJS
│   ├── src/         # Código fuente del backend
│   ├── prisma/      # Esquema y migraciones de Prisma
│   ├── .env.example # Variables de entorno de ejemplo
│   └── ...
│
├── frontend/        # Aplicación web Next.js
│   ├── app/         # Páginas y layouts principales
│   ├── public/      # Recursos estáticos
│   ├── types/       # Tipos TypeScript compartidos
│   ├── .env.local.example # Variables de entorno de ejemplo
│   └── ...
│
├── documentacion/   # Documentación técnica centralizada
│
├── docker-compose.yml # Levanta BD + API + UI con un solo comando
├── pnpm-workspace.yaml # Declaración de workspaces
├── turbo.json          # Configuración de Turborepo
└── ...
```

---

## 3. Tecnologías Principales

- **Next.js:** Framework React para SSR/SSG y rutas modernas (carpeta `app/`).
- **NestJS:** Framework Node.js modular y escalable para APIs.
- **Prisma ORM:** Abstracción de base de datos y migraciones.
- **PostgreSQL:** Motor de base de datos relacional.
- **pnpm workspaces:** Gestión de dependencias y scripts centralizados.
- **Turborepo:** Ejecución paralela de scripts, caché incremental y builds eficientes.
- **Docker Compose:** Orquestación de servicios para desarrollo y testing.

---

## 4. Diagrama de Arquitectura (simplificado)

```
[ Navegador ]
     │
     ▼
[ Next.js (frontend) ]
     │  fetch HTTP
     ▼
[ NestJS (backend) ]
     │  Prisma ORM
     ▼
[ PostgreSQL ]
```

---

## 5. Decisiones Técnicas Clave

- **Separación de responsabilidades:**
  - El frontend solo consume la API, no accede directamente a la base de datos.
  - El backend expone endpoints REST y gestiona la lógica de negocio y validaciones.
- **Prisma como ORM:**
  - Facilita migraciones, tipado y acceso seguro a la base de datos.
- **Uso de TypeScript:**
  - Garantiza tipado estricto y reduce errores en ambos lados.
- **CORS configurado en backend:**
  - Permite comunicación segura entre frontend y backend en desarrollo y producción.
- **Estilos globales y layouts en Next.js:**
  - Permite un diseño consistente y escalable.
- **Variables de entorno versionadas como ejemplo:**
  - `.env.example` y `.env.local.example` para facilitar onboarding y despliegue.
- **Compatibilidad multiplataforma:**
  - Uso de `cross-env` para variables de entorno en Windows, Linux y macOS.
- **Levantar todo con Docker Compose:**
  - Un solo comando inicia BD, API y UI para testing o demos.

---

## 6. Buenas Prácticas

- Uso de variables de entorno para credenciales y configuración sensible.
- Código modular y reutilizable (módulos, servicios, DTOs en NestJS).
- Documentación de flujos y endpoints clave.
- Separación clara entre lógica de presentación (frontend) y lógica de negocio/datos (backend).
- Scripts y dependencias centralizados en la raíz del monorepo.
- Ejemplo de archivos de entorno para facilitar la colaboración.

---

## 7. Notas de entorno y dependencias

- El monorepo usa pnpm workspaces y Turborepo. Ejecuta `pnpm install` en la raíz para instalar todo.
- Usa `pnpm dev` para levantar frontend y backend en paralelo.
- Requisito: pnpm ≥ 8.
- Variables de entorno de ejemplo en `backend/.env.example` y `frontend/.env.local.example`.
- En Windows, la variable PORT se maneja con cross-env para compatibilidad.
- Para desarrollo, asegúrate de tener los tipos de React, Next y Node instalados (ya automatizado).
- Si ves errores de PrismaClient, ejecuta `pnpm --filter backend prisma:generate`.
- Si usas Docker Compose, puedes levantar todo el stack (DB + API + UI) con `docker compose up --build`.

---

Esta arquitectura permite escalar el proyecto fácilmente, mantener un desarrollo organizado y facilitar la colaboración entre equipos frontend y backend.
