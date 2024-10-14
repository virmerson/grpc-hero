import { Controller, ExecutionContext, UseInterceptors } from '@nestjs/common';
import { Observable } from "rxjs"; 
import { Hero, HeroById, HeroServiceController, HeroServiceControllerMethods } from "hero-proto-definition/hero"
import { Metadata } from '@grpc/grpc-js';
import { GrpcServerMetadataInterceptor } from 'src/interceptor/grpc-server-metadata.interceptor';
import { GrpcMetadata } from 'src/decorator/grcp-metadata.decorator';
import { AppService } from 'src/app.service';

@Controller('heroes')
@HeroServiceControllerMethods()
@UseInterceptors(GrpcServerMetadataInterceptor)
export class HeroesController {
     
     constructor(private appService: AppService){
          console.log(appService.storage);
     }
   
     findOne(request: HeroById): Promise<Hero> | Observable<Hero> | Hero {

               const items = [ {id:1, name:'Super Man'} , {id:2, name: "Batman" }];
               const hero = items.find( ({id})=> id===request.id)
               if (!hero){
                    throw new Error(`Hero with id ${request.id} not found`)
               }
               return hero
     }

}