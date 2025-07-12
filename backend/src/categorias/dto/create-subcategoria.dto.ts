import { IsString, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSubcategoriaDto {
  @IsString()
  nombre: string = '';

  @IsOptional()
  @IsString()
  descripcion?: string = '';
}


