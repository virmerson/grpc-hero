import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({

    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join('./node_modules/hero-proto-definition/dist/src/proto/hero.proto'),
      url: 'localhost:5000'

    }
  });


  await app.startAllMicroservices();
 // await app.listen(3002);

}
bootstrap();


