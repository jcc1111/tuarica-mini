

# Dockerfile para Next.js (frontend) con soporte para monorepo pnpm workspaces
FROM node:20-alpine AS builder
WORKDIR /repo

# Copiar los archivos de configuración y lockfiles del monorepo
COPY pnpm-workspace.yaml ./
COPY package.json ./
COPY pnpm-lock.yaml ./

# Copiar los paquetes necesarios
COPY packages ./packages
COPY frontend ./frontend

# Instalar pnpm
RUN npm install -g pnpm

# Instalar dependencias solo para el frontend y shared
RUN pnpm install --filter @tuarica/shared... --filter frontend...

# Build del frontend
WORKDIR /repo/frontend
RUN pnpm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /repo/frontend .
EXPOSE 3000
CMD ["pnpm", "start"]
