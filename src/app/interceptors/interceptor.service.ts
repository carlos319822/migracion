import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let auth_token = localStorage.getItem('token_value');
    let bear = 'Bearer '+auth_token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': bear
    })

    // const auth_token = localStorage.getItem('token_value');
    // const headers = new HttpHeaders({
    //   'Authorization': 'bearer '+auth_token
    // });
    
    const reqClone = req.clone({headers: headers});

    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    );
  }

  manejarError(error:HttpErrorResponse){
    console.log('sucedio un error');
    console.warn(error);
    return throwError(()=>new Error('Error personalizado'));
  }

}
