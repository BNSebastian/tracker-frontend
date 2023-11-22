import { frontendUrl } from 'src/app/_environments/frontend';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserAuthenticate } from '../../models/user';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;

  model: UserAuthenticate = {
    email: '',
    password: '',
  };

  constructor(private router: Router, public accountService: AccountService) {}

  login() {
    this.accountService.authenticate(this.model).subscribe((response) => {
      this.router.navigateByUrl(frontendUrl.home);
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl(frontendUrl.home);
  }
}
