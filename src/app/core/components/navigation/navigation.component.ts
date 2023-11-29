import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { frontendUrl } from '../../../_environments/frontend';
import { AccountService } from '../../../security/services/account.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  navbarOpen = false;
  model: any = {};
  jwtToken: any = '';

  constructor(
    private router: Router,
    public accountService: AccountService,
    public cookieService: CookieService
  ) {}

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl(frontendUrl.home);
  }

  toggleNavbar() {
    // event.preventDefault(); // Prevent default action of the anchor tag
    this.navbarOpen = !this.navbarOpen;
    console.log(`hamburger pressed, the flag value is ${this.navbarOpen}`);
  }
}
