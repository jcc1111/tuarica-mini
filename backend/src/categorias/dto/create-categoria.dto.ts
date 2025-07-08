// tuarica-mini/backend/src/categorias/dto/create-categoria.dto.ts
import { IsString, Length } from 'class-validator';

export class CreateCategoriaDto {
  /** El bang (!) indica a TS que este campo siempre vendrá en el request */
  @IsString({ message: 'El nombre debe ser texto' })
  @Length(2, 50, { message: 'El nombre debe tener entre 2 y 50 caracteres' })
  readonly nombre!: string;
}
