import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const CROS_OPTIONS = {
  origin: '*',
  methods: '*',
  allowedHeaders: '*',
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200/',
  });
  await app.listen(3000);
}
bootstrap();
