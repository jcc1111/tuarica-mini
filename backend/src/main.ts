// backend/src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // Crea la aplicación Nest
  const app = await NestFactory.create(AppModule);

  // Pipe global de validación para todos los DTOs
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // Lista de orígenes permitidos para CORS (agrega aquí nuevas IPs si cambias de red)
  const allowedOrigins = [
    process.env.ALLOWED_ORIGIN || 'http://localhost:3000',
    'http://localhost:3001',
    'http://172.16.101.102:3001',
    'http://172.20.10.2:3001',
  ];
  app.enableCors({
    origin: allowedOrigins,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
  });

  // Arranca el servidor en el puerto 3001
  await app.listen(3001);
  console.log(`🚀 Backend listening on http://localhost:3001`);
}

bootstrap();
