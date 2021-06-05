import { HttpErrorService } from './../services/http-error.service';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class HttpErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private httpErrorService: HttpErrorService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(err => {
        this.httpErrorService.showError(err.error.message);
        return throwError(err);
      })
    );
  }
}
