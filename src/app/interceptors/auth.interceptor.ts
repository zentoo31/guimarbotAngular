import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    withCredentials: true,
  });
  return next(authReq).pipe(
    catchError(error => {
      if (error.status === 401 || error.status === 403) {
          const router = inject(Router);
          router.navigate(['/login']);
      }
      return throwError(() => new Error (error))
    })
  );
};
