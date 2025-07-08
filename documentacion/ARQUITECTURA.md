# ARQUITECTURA DEL PROYECTO

Este documento describe la arquitectura general del proyecto, las tecnologías principales utilizadas y las decisiones técnicas clave.

---

## 1. Descripción General

El proyecto está compuesto por dos aplicaciones principales:

- **Frontend:** Next.js (React) para la interfaz de usuario.
- **Backend:** NestJS (Node.js) para la API y lógica de negocio.
- **Base de datos:** PostgreSQL, gestionada a través de Prisma ORM.

---

## 2. Estructura de Carpetas

```
/tuarica-mini
│
├── backend/         # API RESTful con NestJS
│   ├── src/         # Código fuente del backend
│   ├── prisma/      # Esquema y migraciones de Prisma
│   └── ...
│
├── frontend/        # Aplicación web Next.js
│   ├── app/         # Páginas y layouts principales
│   ├── public/      # Recursos estáticos
│   └── types/       # Tipos TypeScript compartidos
│
└── ...
```

---

## 3. Tecnologías Principales

- **Next.js:** Framework React para SSR/SSG y rutas modernas (carpeta `app/`).
- **NestJS:** Framework Node.js modular y escalable para APIs.
- **Prisma ORM:** Abstracción de base de datos y migraciones.
- **PostgreSQL:** Motor de base de datos relacional.

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

---

## 6. Buenas Prácticas

- Uso de variables de entorno para credenciales y configuración sensible.
- Código modular y reutilizable (módulos, servicios, DTOs en NestJS).
- Documentación de flujos y endpoints clave.
- Separación clara entre lógica de presentación (frontend) y lógica de negocio/datos (backend).

---

Esta arquitectura permite escalar el proyecto fácilmente, mantener un desarrollo organizado y facilitar la colaboración entre equipos frontend y backend.
