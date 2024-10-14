import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GrpcServerMetadataInterceptor } from 'src/interceptor/grpc-server-metadata.interceptor';
import { AppService } from 'src/app.service';


@Module({
  controllers: [HeroesController],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: GrpcServerMetadataInterceptor,
  },AppService],
  
})
export class HeroesModule {}
