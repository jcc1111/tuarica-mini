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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const res = await request(app.getHttpServer()).get('/categorias');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
  it('/categorias (POST) crea una categoría', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const res = await request(app.getHttpServer())
      .post('/categorias')
      .send({ nombre: 'Cat1' });
    expect(res.status).toBe(201);
    expect(typeof res.body).toBe('object');
    expect(res.body).toHaveProperty('nombre', 'Cat1');
  });

  afterAll(async () => {
    await app.close();
  });
});
