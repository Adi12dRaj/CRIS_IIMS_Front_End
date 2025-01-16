
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Exclude the login endpoint by checking the URL
    // The condition is explicitly checking if the request is targeting the /login endpoint
    if (req.url.includes('/login')) {
      return next.handle(req);  // Skip adding the token for the login request
    }

    const token = localStorage.getItem('jwtToken');  // Get token from localStorage

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(req);
  }
}
