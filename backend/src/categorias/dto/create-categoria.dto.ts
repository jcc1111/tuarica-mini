// tuarica-mini/backend/src/categorias/dto/create-categoria.dto.ts

export class CreateCategoriaDto {
  /** El bang (!) indica a TS que este campo siempre vendrá en el request */
  readonly nombre!: string;
}
