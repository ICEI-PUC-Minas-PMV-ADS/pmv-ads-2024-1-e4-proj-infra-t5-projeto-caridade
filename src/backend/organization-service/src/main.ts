import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 4400,
    },
  });

  await app.startAllMicroservices();
  await app.listen(4400);
  console.log(`OrganizationService is running on`, await app.getUrl());
}
bootstrap();
