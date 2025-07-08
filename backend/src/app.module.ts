// tuarica-mini/backend/src/app.module.ts
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [
    // Importa el módulo global de Prisma
    PrismaModule,
    // Tu módulo de categorías
    CategoriasModule,
  ],
})
export class AppModule {}
