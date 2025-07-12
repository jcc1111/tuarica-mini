// tuarica-mini/backend/src/app.module.ts
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma.module';
import { CategoriasModule } from './categorias/categorias.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, CategoriasModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
