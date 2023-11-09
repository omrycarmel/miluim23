import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, mapToCanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
class AuthGuard {
  constructor(private authService: AuthService, private router: Router)
  {}

  canActive(): boolean {
   if (this.authService.hasCredentials()) {
    return true;
   }
   this.router.navigate(['login']);
   return false;
  }
}

export const authGuardFn: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(AuthGuard).canActive()
  };