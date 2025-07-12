import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  // Borra todas las categorías existentes
  await prisma.categoria.deleteMany();

  // Crea categorías de ejemplo
  await prisma.categoria.createMany({
    data: [
      { nombre: 'Tecnología' },
      { nombre: 'Cultura' },
      { nombre: 'Deportes' },
      { nombre: 'Educación' },
    ],
  });



  console.log('Seed ejecutado: categorías y usuarios insertados');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
