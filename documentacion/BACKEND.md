# DOCUMENTACIÓN DEL BACKEND (NestJS)

Este documento describe la estructura, módulos, servicios y buenas prácticas implementadas en el backend del proyecto.

---

## 1. Estructura de Carpetas

```
backend/
├── prisma/           # Esquema y migraciones de Prisma
│   └── schema.prisma
├── src/
│   ├── categorias/   # Módulo de categorías
│   │   ├── categorias.controller.ts
│   │   ├── categorias.module.ts
│   │   ├── categorias.service.ts
│   │   └── dto/
│   │       ├── create-categoria.dto.ts
│   │       └── update-categoria.dto.ts
│   ├── app.module.ts
│   ├── main.ts
│   ├── prisma.module.ts
│   └── prisma.service.ts
└── ...
```

---

## 2. Principales Archivos y Funcionalidad

- **main.ts**: Arranca la aplicación NestJS y configura CORS.
- **app.module.ts**: Módulo raíz, importa Prisma y el módulo de categorías.
- **prisma.service.ts**: Servicio global para interactuar con la base de datos PostgreSQL usando Prisma.
- **categorias/**: Módulo que gestiona el CRUD de categorías.
  - **categorias.controller.ts**: Define los endpoints REST para categorías.
  - **categorias.service.ts**: Lógica de negocio y acceso a datos.
  - **dto/**: Define los DTOs para validación de datos de entrada.
- **prisma/schema.prisma**: Define el modelo de datos y la conexión a la base de datos.

---

## 3. Flujo de una petición típica

1. El frontend hace una petición HTTP (por ejemplo, GET `/categorias`).
2. El controlador recibe la petición y delega al servicio correspondiente.
3. El servicio usa PrismaService para consultar o modificar la base de datos.
4. Se retorna la respuesta al frontend en formato JSON.

---

## 4. Buenas Prácticas Aplicadas

- Código modular y desacoplado.
- Uso de DTOs para validación y tipado de datos de entrada.
- Configuración de CORS para seguridad en el acceso desde el frontend.
- Variables de entorno para credenciales sensibles.
- Prisma ORM para acceso seguro y tipado a la base de datos.
- Comentarios claros en el código fuente.

---

## 5. Comandos útiles

- Levantar el backend en desarrollo:
  ```sh
  pnpm dev
  ```
- Ejecutar migraciones Prisma:
  ```sh
  npx prisma migrate dev
  ```
- Abrir Prisma Studio:
  ```sh
  npx prisma studio
  ```

---

Esta documentación debe actualizarse a medida que se agreguen nuevos módulos, servicios o funcionalidades al backend.
