import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpHandler,HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthenticationService } from "src/app/services/authentication.service";
import { HttpEvent, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {



  constructor(private authenticationService:AuthenticationService ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authenticationService.isLoggedIn()) {
      const authReq = req.clone({
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('token')
        })
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
