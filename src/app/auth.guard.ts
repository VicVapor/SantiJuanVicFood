import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { tap, take } from 'rxjs/operators';

export const AuthGuard = () => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);

  return () => {
    return authenticationService.isLoggedIn$().pipe(
      take(1),
      tap((isLoggedIn) => {
        if (!isLoggedIn) {
          router.navigateByUrl('/login');
        }
      })
    );
  };
};
