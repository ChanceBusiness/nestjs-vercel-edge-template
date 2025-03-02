import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';

export const config = { runtime: 'edge' };

export default async function handler(req: Request) {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const instance = app.getHttpAdapter().getInstance();
  return instance(req);
}