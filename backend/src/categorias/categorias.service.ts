// tuarica-mini/backend/src/categorias/categorias.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Categoria } from '@prisma/client';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriasService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Categoria[]> {
    return this.prisma.categoria.findMany();
  }

  findOne(id: number): Promise<Categoria | null> {
    return this.prisma.categoria.findUnique({ where: { id } });
  }

  create(dto: CreateCategoriaDto): Promise<Categoria> {
    return this.prisma.categoria.create({
      data: { nombre: dto.nombre },
    });
  }

  update(id: number, dto: UpdateCategoriaDto): Promise<Categoria> {
    return this.prisma.categoria.update({
      where: { id },
      data: { nombre: dto.nombre },
    });
  }

  remove(id: number): Promise<Categoria> {
    return this.prisma.categoria.delete({ where: { id } });
  }
}
