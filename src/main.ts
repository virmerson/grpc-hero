import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {

    transport:Transport.GRPC,
    options:{
      package:'hero',
      protoPath:join(__dirname, 'node_modules/hero-proto-definition/proto/hero.proto')
    }
  });
  await app.listen();
}
bootstrap();


