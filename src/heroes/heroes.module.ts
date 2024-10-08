import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';


@Module({
  controllers: [HeroesController],
  providers: []
})
export class HeroesModule {}
