// backend/src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './all-exceptions.filter';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  // Crea la aplicación Nest
  const app = await NestFactory.create(AppModule);

  // Pipe global de validación para todos los DTOs
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // Filtro global de manejo de errores
  app.useGlobalFilters(new AllExceptionsFilter());

  // Puerto y orígenes desde variables de entorno
  const port = process.env.PORT ? Number(process.env.PORT) : 3001;
  const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:3000').split(',');
  app.enableCors({
    origin: allowedOrigins,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
  });

  // Arranca el servidor en el puerto 3001
  await app.listen(port);
  console.log(`🚀 Backend listening on http://localhost:${port}`);
}

bootstrap();
