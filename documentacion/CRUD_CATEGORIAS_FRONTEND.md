# CRUD de Categorías - Documentación de Frontend

Este documento describe la estructura, archivos y funcionamiento del CRUD de categorías implementado en el frontend (Next.js).

---

## 1. Archivos principales

- **`/app/categorias/page.tsx`**
  - Página principal del CRUD de categorías.
  - Permite listar, editar (inline) y eliminar categorías.
  - Incluye enlaces para crear una nueva categoría y volver al inicio.
  - Usa hooks de React (`useState`, `useEffect`) para gestionar estado y llamadas a la API.
  - Implementa edición inline y confirmación para eliminar.

- **`/app/categorias/form/page.tsx`**
  - Formulario para crear una nueva categoría.
  - Permite ingresar el nombre y enviar la petición al backend.
  - Incluye enlaces para volver al listado de categorías y al inicio.

- **`/types/categoria.ts`**
  - Define el tipo `Categoria` usado en el frontend para tipar los datos recibidos y enviados.

---

## 2. Flujo de usuario

1. El usuario accede a `/categorias` y ve la lista de categorías existentes.
2. Puede crear una nueva categoría desde el enlace o el formulario.
3. Puede editar el nombre de una categoría directamente en la lista (edición inline).
4. Puede eliminar una categoría con confirmación.
5. Puede navegar entre el inicio, el listado y el formulario usando los enlaces provistos.

---

## 3. Llamadas a la API

- **GET `/categorias`**: Obtiene todas las categorías.
- **POST `/categorias`**: Crea una nueva categoría.
- **PATCH `/categorias/:id`**: Edita el nombre de una categoría.
- **DELETE `/categorias/:id`**: Elimina una categoría.

---

## 4. Notas técnicas

- El archivo `/app/categorias/page.tsx` debe tener la directiva `'use client';` al inicio para permitir el uso de hooks de React.
- El CRUD es completamente funcional y reactivo: los cambios se reflejan inmediatamente tras cada acción.
- El código es fácilmente extensible para agregar validaciones, estilos o nuevas funcionalidades.

---

Esta documentación debe actualizarse si se agregan nuevas funcionalidades o se modifica el flujo del CRUD de categorías.
