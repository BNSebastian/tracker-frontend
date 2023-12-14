import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AccountService } from 'src/app/security/services/account.service';
import { frontendUrl } from 'src/app/shared/environments/frontend';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.css'],
})
export class NavbarMobileComponent {
  @Input()
  isAdmin: boolean = false;

  @Input()
  unauthenticatedLinks: any = [];

  @Input()
  authenticatedLinks: any = [];

  @Input()
  adminLinks: any = [];

  constructor(
    private router: Router,
    public accountService: AccountService,
    public cookieService: CookieService
  ) {}

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl(frontendUrl.home);
  }
}
