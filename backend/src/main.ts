// backend/src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Crea la aplicación Nest
  const app = await NestFactory.create(AppModule);

  // Lista de orígenes permitidos para CORS (agrega aquí nuevas IPs si cambias de red)
  const allowedOrigins = [
    'http://localhost:3001',
    'http://172.16.101.102:3001',
    'http://172.20.10.2:3001',
  ];
  app.enableCors({
    origin: allowedOrigins,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
  });

  // Arranca el servidor en el puerto 3000
  await app.listen(3000);
  console.log(`🚀 Backend listening on http://localhost:3000`);
}

bootstrap();
