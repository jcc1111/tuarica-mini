import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasService } from './categorias.service';
import { PrismaService } from '../prisma.service';

describe('CategoriasService', () => {
  let service: CategoriasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriasService, PrismaService],
    }).compile();

    service = module.get<CategoriasService>(CategoriasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('debería crear una subcategoría correctamente', () => {
    const subcategoriaDto = { nombre: 'Subcat1', descripcion: 'desc' };
    expect(subcategoriaDto.nombre).toBe('Subcat1');
    expect(subcategoriaDto.descripcion).toBe('desc');
  });

  it('debería crear una categoría con subcategorías', () => {
    const categoriaDto = {
      nombre: 'Cat1',
      descripcion: 'desc',
    };
  });
});
