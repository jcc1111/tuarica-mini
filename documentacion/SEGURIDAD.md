# SEGURIDAD DEL PROYECTO

Este documento describe las buenas prácticas y configuraciones de seguridad aplicadas (o recomendadas) para el proyecto, tanto en desarrollo como en producción.

---

## 1. Variables de Entorno
- **Nunca** subas archivos `.env` ni credenciales sensibles al repositorio.
- Usa variables de entorno para:
  - Credenciales de la base de datos (usuario, contraseña, host, puerto, nombre de la base).
  - Secretos de JWT o claves de API.
- Ejemplo de variables en `.env`:
  ```env
  DATABASE_URL=postgresql://usuario:password@localhost:5432/tuarica
  JWT_SECRET=supersecreto
  ```

---

## 2. Acceso a la Base de Datos
- La base de datos **no debe estar expuesta a internet**. Solo el backend debe tener acceso directo.
- Usa usuarios de base de datos con permisos mínimos necesarios.
- Cambia las contraseñas por defecto y usa contraseñas fuertes.

---

## 3. CORS (Cross-Origin Resource Sharing)
- Configura CORS en el backend (`main.ts`) para permitir solo los orígenes necesarios (por ejemplo, el dominio del frontend en producción).
- En desarrollo, puedes permitir `localhost` pero restringe en producción.

---

## 4. Prisma Studio
- **No expongas Prisma Studio en producción.** Solo debe usarse localmente para desarrollo y administración.

---

## 5. Validación y Sanitización de Datos
- Usa DTOs y pipes de validación en NestJS para validar y sanear los datos recibidos en la API.
- Nunca confíes en los datos que vienen del cliente.

---

## 6. Autenticación y Autorización (a implementar)
- Implementa autenticación (por ejemplo, JWT) para proteger rutas sensibles.
- Define roles y permisos si tu app lo requiere.
- Documenta los headers y flujos de autenticación en la API.

---

## 7. Otras Buenas Prácticas
- Mantén tus dependencias actualizadas.
- Usa HTTPS en producción.
- Haz backups regulares de la base de datos.
- Revisa los logs de acceso y errores.
- Limita los intentos de login y protege contra ataques de fuerza bruta.

---

Esta guía debe actualizarse a medida que se implementen nuevas medidas de seguridad o cambien los requisitos del proyecto.
