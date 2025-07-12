// tuarica-mini/backend/src/categorias/categorias.controller.ts

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { Categoria } from '@prisma/client';
// import { UseGuards } from '@nestjs/common';
// Limpieza: eliminadas referencias a auth, roles y usuarios
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Controller('categorias')
@Controller('categorias')
export class CategoriasController {
  constructor(private readonly svc: CategoriasService) {}

  @Get()
  getAll(): Promise<Categoria[]> {
    return this.svc.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Promise<Categoria | null> {
    return this.svc.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateCategoriaDto): Promise<Categoria> {
    return this.svc.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCategoriaDto,
  ): Promise<Categoria> {
    return this.svc.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
    return this.svc.remove(id);
  }
}
