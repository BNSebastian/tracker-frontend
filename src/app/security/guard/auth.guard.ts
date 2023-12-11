import { frontendUrl } from 'src/app/shared/environments/frontend';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}

  canActivate(): boolean {
    if (this.accountService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate([frontendUrl.logIn]);
      return false;
    }
  }
}
