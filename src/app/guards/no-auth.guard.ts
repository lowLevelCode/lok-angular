import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this._authService.isLoggedIn()) {
      this._router.navigate(['home']);
      return false;
    }
    return true;
}
}
