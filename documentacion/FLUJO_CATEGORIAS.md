# Flujo de Petición y Respuesta: Listado de Categorías

Este documento describe el flujo completo de archivos y módulos que intervienen desde que un usuario visita la página principal hasta que se muestran las categorías obtenidas desde la base de datos PostgreSQL.

---

## 1. Frontend (Next.js)

### a) Página principal
- **`frontend/app/layout.tsx`**
  - Define el layout global y aplica los estilos de `globals.css`.
- **`frontend/app/globals.css`**
  - Aplica los estilos globales (por ejemplo, color de fondo).
- **`frontend/app/page.tsx`**
  - Componente principal de la página. Al montarse, ejecuta un `fetch` a la API del backend para obtener las categorías y las muestra.

### b) Tipado de datos
- **`frontend/types/categoria.ts`**
  - Define el tipo `Categoria` usado en el frontend para tipar los datos recibidos.

---

## 2. Backend (NestJS)

### a) Petición HTTP desde el frontend
- **`frontend/app/page.tsx`**
  - Hace un `fetch` a `http://localhost:3000/categorias`.

### b) Ruteo y lógica en el backend
- **`backend/src/main.ts`**
  - Arranca el servidor NestJS y configura CORS.
- **`backend/src/app.module.ts`**
  - Importa el módulo de categorías.
- **`backend/src/categorias/categorias.controller.ts`**
  - Define la ruta `/categorias` y responde a la petición GET.
- **`backend/src/categorias/categorias.service.ts`**
  - Lógica para obtener las categorías desde la base de datos usando Prisma.

### c) Acceso a la base de datos
- **`backend/src/prisma.service.ts`**
  - Servicio que conecta con la base de datos PostgreSQL usando Prisma.
- **`backend/prisma/schema.prisma`**
  - Define el modelo `Categoria` y la configuración de la base de datos.

---

## 3. Base de datos
- **PostgreSQL**
  - Almacena los datos de la tabla `Categoria` que son consultados por el backend.

---

## Resumen visual del flujo

1. **Usuario** →  
2. **frontend/app/layout.tsx** →  
3. **frontend/app/page.tsx** (usa **frontend/types/categoria.ts**) →  
4. **fetch a backend** →  
5. **backend/src/main.ts** →  
6. **backend/src/app.module.ts** →  
7. **backend/src/categorias/categorias.controller.ts** →  
8. **backend/src/categorias/categorias.service.ts** →  
9. **backend/src/prisma.service.ts** →  
10. **PostgreSQL (definido en backend/prisma/schema.prisma)**  
11. **Respuesta** →  
12. **frontend/app/page.tsx** muestra la lista al usuario.

---

Esta documentación sirve como referencia rápida para entender el flujo de datos y los archivos involucrados en la funcionalidad principal del listado de categorías.
