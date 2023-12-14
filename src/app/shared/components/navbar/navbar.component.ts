import { CookieService } from 'ngx-cookie-service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { frontendUrl } from '../../environments/frontend';
import { AccountService } from 'src/app/security/services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;

  isAdmin: boolean = false;

  unauthenticatedLinks: any = [
    {
      name: 'Home',
      url: frontendUrl.home,
    },
    {
      name: 'Signup',
      url: frontendUrl.signUp,
    },
    {
      name: 'Login',
      url: frontendUrl.logIn,
    },
  ];

  authenticatedLinks: any = [
    {
      name: 'Home',
      url: frontendUrl.home,
    },
    {
      name: 'Activity',
      url: frontendUrl.activity,
    },
    {
      name: 'Time',
      url: frontendUrl.time,
    },
    {
      name: 'Type',
      url: frontendUrl.type,
    },
  ];

  adminLinks: any = [
    {
      name: 'User activities',
      url: frontendUrl.activityListAll,
    },
    {
      name: 'User time',
      url: frontendUrl.timeGetAll,
    },
  ];

  constructor(
    private router: Router,
    public accountService: AccountService,
    public cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.accountService.isAdmin().subscribe((isAdmin: boolean) => {
      this.isAdmin = isAdmin;
      console.log(isAdmin);
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl(frontendUrl.home);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    console.log(`hamburger pressed, the flag value is ${this.navbarOpen}`);
  }
}
