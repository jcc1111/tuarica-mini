// tuarica-mini/backend/src/categorias/dto/update-categoria.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaDto } from './create-categoria.dto';

// El DTO de actualización hereda las validaciones del de creación
export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {}
