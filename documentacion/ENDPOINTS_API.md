# ENDPOINTS DE LA API (NestJS)

Este documento describe los endpoints principales expuestos por el backend (NestJS) para la gestión de categorías y otros recursos.

---

## 1. Categorías

### Obtener todas las categorías
- **Método:** GET
- **Ruta:** `/categorias`
- **Descripción:** Devuelve un listado de todas las categorías almacenadas en la base de datos.
- **Ejemplo de respuesta:**
```json
[
  { "id": 1, "nombre": "Comida" },
  { "id": 2, "nombre": "Tecnología" }
]
```

### Crear una nueva categoría
- **Método:** POST
- **Ruta:** `/categorias`
- **Body:**
```json
{
  "nombre": "NuevaCategoria"
}
```
- **Descripción:** Crea una nueva categoría en la base de datos.
- **Respuesta exitosa:**
```json
{ "id": 3, "nombre": "NuevaCategoria" }
```

### Obtener una categoría por ID
- **Método:** GET
- **Ruta:** `/categorias/:id`
- **Descripción:** Devuelve los datos de una categoría específica.
- **Ejemplo de respuesta:**
```json
{ "id": 1, "nombre": "Comida" }
```

### Actualizar una categoría
- **Método:** PATCH
- **Ruta:** `/categorias/:id`
- **Body:**
```json
{
  "nombre": "NuevoNombre"
}
```
- **Descripción:** Actualiza el nombre de una categoría existente.
- **Respuesta exitosa:**
```json
{ "id": 1, "nombre": "NuevoNombre" }
```

### Eliminar una categoría
- **Método:** DELETE
- **Ruta:** `/categorias/:id`
- **Descripción:** Elimina una categoría de la base de datos.
- **Respuesta exitosa:**
```json
{ "id": 1, "nombre": "Comida" }
```

---

## 2. Notas
- Todos los endpoints devuelven datos en formato JSON.
- Si ocurre un error (por ejemplo, ID no encontrado), se devuelve un mensaje de error y el código HTTP correspondiente.
- Para agregar autenticación/autorización, se recomienda documentar los headers requeridos en el futuro.

---

Esta referencia se debe actualizar a medida que se agreguen nuevos recursos o endpoints a la API.
