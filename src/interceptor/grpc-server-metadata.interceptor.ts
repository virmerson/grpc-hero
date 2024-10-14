import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class GrpcServerMetadataInterceptor implements NestInterceptor {


  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const metadata = context.switchToRpc().getContext();
    if(metadata){
        // Log metadata upon receiving the request
      console.log('Server Metadata:', metadata.getMap());
  
    }

    return next.handle().pipe(
      tap(() => {
        // Here we can do something after the response is sent
      }),
    );
  }
}