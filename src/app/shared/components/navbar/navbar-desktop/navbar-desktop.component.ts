import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/security/services/account.service';
import { frontendUrl } from 'src/app/shared/environments/frontend';

@Component({
  selector: 'app-navbar-desktop',
  templateUrl: './navbar-desktop.component.html',
  styleUrls: ['./navbar-desktop.component.css'],
})
export class NavbarDesktopComponent {
  @Input()
  isAdmin: boolean = false;

  @Input()
  unauthenticatedLinks: any = [];

  @Input()
  authenticatedLinks: any = [];

  @Input()
  adminLinks: any = [];

  constructor(private router: Router, public accountService: AccountService) {}

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl(frontendUrl.home);
  }
}
