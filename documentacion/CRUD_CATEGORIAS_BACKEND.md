# CRUD de Categorías - Documentación de Backend

Este documento describe la estructura, archivos y funcionamiento del CRUD de categorías implementado en el backend (NestJS + Prisma).

---

## 1. Archivos principales

- **`/src/categorias/categorias.controller.ts`**
  - Define los endpoints REST para el CRUD de categorías.
  - Métodos: `getAll`, `getOne`, `create`, `update`, `remove`.

- **`/src/categorias/categorias.service.ts`**
  - Lógica de negocio y acceso a la base de datos usando Prisma.
  - Métodos: `findAll`, `findOne`, `create`, `update`, `remove`.

- **`/src/categorias/dto/create-categoria.dto.ts`**
  - DTO para la creación de una categoría (valida el campo `nombre`).

- **`/src/categorias/dto/update-categoria.dto.ts`**
  - DTO para la actualización parcial de una categoría.

- **`/prisma/schema.prisma`**
  - Define el modelo `Categoria` y su mapeo a la tabla de la base de datos.

---

## 2. Endpoints expuestos

- **GET `/categorias`**: Lista todas las categorías.
- **GET `/categorias/:id`**: Obtiene una categoría por su ID.
- **POST `/categorias`**: Crea una nueva categoría.
- **PATCH `/categorias/:id`**: Actualiza el nombre de una categoría.
- **DELETE `/categorias/:id`**: Elimina una categoría.

---

## 3. Ejemplos de request/response

### Crear categoría
**POST** `/categorias`
```json
{
  "nombre": "NuevaCategoria"
}
```
**Respuesta:**
```json
{ "id": 3, "nombre": "NuevaCategoria" }
```

### Editar categoría
**PATCH** `/categorias/3`
```json
{
  "nombre": "Actualizada"
}
```
**Respuesta:**
```json
{ "id": 3, "nombre": "Actualizada" }
```

### Eliminar categoría
**DELETE** `/categorias/3`
**Respuesta:**
```json
{ "id": 3, "nombre": "Actualizada" }
```

---

## 4. Flujo interno

1. El controlador recibe la petición y valida los datos usando los DTOs.
2. El servicio ejecuta la lógica de negocio y accede a la base de datos vía Prisma.
3. Se retorna la respuesta al cliente en formato JSON.

---

## 5. Notas técnicas

- Los DTOs aseguran que solo se acepten los campos esperados.
- Prisma gestiona el acceso seguro y tipado a la base de datos.
- El CRUD es fácilmente extensible para agregar validaciones, relaciones o lógica adicional.

---

Esta documentación debe actualizarse si se agregan nuevas funcionalidades o se modifica el flujo del CRUD de categorías en el backend.
