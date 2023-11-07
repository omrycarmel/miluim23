import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import "reflect-metadata"
import { AppDataSource } from './db/dbinit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await AppDataSource.initialize();
  
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true
    }
  ));
  await app.listen(3000);
}
bootstrap();