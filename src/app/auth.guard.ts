import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from "./login/login.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _loginservice:LoginService){

  }
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    return this._loginservice.LoginChecking();
  }
}
