import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 4300,
    },
  });

  await app.startAllMicroservices();
  await app.listen(4300);
  console.log(`ReviewService is running on`, await app.getUrl());
}
bootstrap();
