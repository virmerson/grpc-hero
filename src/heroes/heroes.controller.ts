import { Controller } from '@nestjs/common';
import { Observable } from "rxjs"; 
import { Hero, HeroById, HeroServiceController, HeroServiceControllerMethods } from "hero-proto-definition/hero"


@Controller('heroes')
@HeroServiceControllerMethods()
export class HeroesController implements HeroServiceController{
     
     findOne(request: HeroById): Promise<Hero> | Observable<Hero> | Hero {
               const items = [ {id:1, name:'Super Man'} , {id:2, name: "Batman" }];
               const hero = items.find( ({id})=> id===request.id)
               if (!hero){
                    throw new Error(`Hero with id ${request.id} not found`)
               }
               return hero
     }

}