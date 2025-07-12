// tuarica-mini/backend/src/app.module.ts
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma.module';
import { CategoriasModule } from './categorias/categorias.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PrismaModule, CategoriasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
