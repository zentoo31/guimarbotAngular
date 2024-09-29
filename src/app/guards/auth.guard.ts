import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.isAuth().pipe(
  map(isAuth => {
    if(isAuth){
      return true;
    }else{
      router.navigate(['/login']);
      return false;
    }
  }),
  catchError(err => {
    router.navigate(['/login']);
    return of (false);
  })
);   
};
