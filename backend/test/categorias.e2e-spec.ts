import * as dotenv from 'dotenv';
dotenv.config();

import request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

describe('Categorias (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/categorias (GET)', async () => {
    // Autenticación: login y obtención de JWT
    const loginRes = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'jorge@demo.com', // Usuario del seed
        password: 'mundo1',      // Contraseña real
      });
    expect(loginRes.status).toBe(201);
    const token = loginRes.body.access_token;
    expect(token).toBeDefined();

    // Usar el JWT en la petición a /categorias
    const res = await request(app.getHttpServer())
      .get('/categorias')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('/categorias (POST) crea una categoría con subcategorías', async () => {
    // Autenticación: login y obtención de JWT
    const loginRes = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'jorge@demo.com',
        password: 'mundo1',
      });
    const token = loginRes.body.access_token;
    expect(token).toBeDefined();

    const res = await request(app.getHttpServer())
      .post('/categorias')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nombre: 'Cat1',
        descripcion: 'desc',
      });
    expect(res.status).toBe(201);
    expect(res.body.nombre).toBe('Cat1');
  });



  afterAll(async () => {
    await app.close();
  });
});
