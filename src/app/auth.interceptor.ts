import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-localstorage';

// angularda servisler singleton çalışır, component directive gibi diğer yapılar ise transient çalışır.
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // req bozmamak için clone ile kullanalım.

    const authReq = request.clone({
      headers: request.headers
        .set('Authorization', `Bearer ${this.localStorageService.get('token')}`)
        .set('Content-Type', 'application/json'),
    });

    console.log('authReq', request);

    return next.handle(authReq);
  }
}
