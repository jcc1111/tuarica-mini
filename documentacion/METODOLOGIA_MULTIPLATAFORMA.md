Buenísimo# Metodología para trabajar en TuArica desde Windows y Mac

Esta guía te ayudará a desarrollar el proyecto en ambos sistemas operativos, manteniendo el flujo limpio y sincronizado.

---

## 1. Sincronización de código
- Usa **Git** para versionar y sincronizar tu código.
- Haz commits frecuentes y ejecuta `git push` antes de cambiar de equipo.
- Al cambiar de máquina, ejecuta `git pull` para traer los últimos cambios.

## 2. Archivos sensibles/locales
- No subas archivos `.env`, `.env.local` ni configuraciones locales a Git (ya están en `.gitignore`).
- Usa los archivos de ejemplo (`.env.example`, `.env.local.example`) para compartir la estructura de variables.

## 3. Instalación de dependencias
- Cada vez que cambies de equipo y traigas cambios, ejecuta:
  ```sh
  pnpm install
  ```
- Así aseguras que los `node_modules` estén actualizados según el lockfile.

## 4. Base de datos y Docker
- Si usas Docker para la base de datos, levántala en ambas máquinas:
  ```sh
  docker compose up -d
  ```
- Si necesitas migrar datos reales, exporta/importa la base de datos (dump SQL).

## 5. Migraciones y seed
- Tras sincronizar el código, ejecuta:
  ```sh
  pnpm --filter backend prisma:migrate
  pnpm --filter backend prisma:generate
  pnpm --filter backend prisma:seed
  ```
- Así tu base de datos local estará alineada con el esquema y datos de ejemplo.

## 6. Scripts multiplataforma
- Los scripts usan `cross-env` para variables de entorno, funcionan igual en Windows y Mac.

## 7. Evita conflictos de dependencias
- No subas ni copies carpetas `node_modules` entre máquinas.
- No subas archivos generados por el sistema operativo (como `.DS_Store` o `Thumbs.db`).

## 8. Flujo recomendado al cambiar de máquina
1. Haz commit y push de tus cambios en la máquina actual.
2. En la nueva máquina, haz pull y ejecuta `pnpm install`.
3. Levanta Docker si lo usas.
4. Ejecuta migraciones y seed si el esquema cambió.
5. Trabaja normalmente y repite el ciclo.

---

**Resumen:**
- Sincroniza solo el código y lockfiles con Git.
- Mantén los entornos locales independientes (archivos `.env`, base de datos).
- Instala dependencias y ejecuta migraciones/seed en cada máquina.
- Usa los mismos scripts y estructura en ambos sistemas.

---

¡Con esta metodología puedes trabajar sin problemas en Windows y Mac, manteniendo el proyecto limpio y sincronizado!
