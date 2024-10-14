import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { AppService } from 'src/app.service.scope';

@Injectable()
export class GrpcServerMetadataInterceptor implements NestInterceptor {
  constructor(private appService: AppService){}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const metadata = context.switchToRpc().getContext();
    if(metadata){
        // Log metadata upon receiving the request
      console.log('Server Metadata:', metadata.getMap());
      this.appService.storage = metadata;
    }

    return next.handle().pipe(
      tap(() => {
        // Here we can do something after the response is sent
      }),
    );
  }
}