import { Controller, ExecutionContext, UseInterceptors } from '@nestjs/common';
import { Observable } from "rxjs"; 
import { Hero, HeroById, HeroServiceController, HeroServiceControllerMethods } from "hero-proto-definition/hero"

import { GrpcServerMetadataInterceptor } from 'src/interceptor/grpc-server-metadata.interceptor';
import { Metadata } from '@grpc/grpc-js';
import { GrpcMetadata } from 'src/decorator/grcp-metadata.decorator';


@Controller('heroes')
@HeroServiceControllerMethods()

export class HeroesController implements HeroServiceController {

   
     findOne(request: HeroById,  metadata:Metadata): Promise<Hero> | Observable<Hero> | Hero {

               console.log('metadata', metadata)
               const items = [ {id:1, name:'Super Man'} , {id:2, name: "Batman" }];
               const hero = items.find( ({id})=> id===request.id)
               if (!hero){
                    throw new Error(`Hero with id ${request.id} not found`)
               }
               return hero
     }

}