import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';
import { ConfigModule } from '@nestjs/config';
import { HeroService } from './hero/hero.service';
//import configuration from './config/configutation';



@Module({
  imports: [HeroesModule],
  controllers: [AppController],
  providers: [AppService, HeroService],
})
export class AppModule { }
