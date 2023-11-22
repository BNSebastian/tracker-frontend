import { CookieService } from 'ngx-cookie-service';
import { map, Observable, ReplaySubject } from 'rxjs';
import { backendUrl } from 'src/app/_environments/backend';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User, UserAuthenticate, UserCreate } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  register(model: UserCreate): Observable<User> {
    return this.http.post<User>(backendUrl.register, model).pipe(
      map((response: User) => {
        this.setCookies(response);
        console.log(response);
        return response;
      })
    );
  }

  authenticate(model: UserAuthenticate): Observable<User> {
    return this.http.post<User>(backendUrl.authenticate, model).pipe(
      map((response: User) => {
        this.setCookies(response);
        console.log(response);
        return response;
      })
    );
  }

  isAuthenticated() {
    return this.cookieService.check('authToken');
  }

  getAuthToken() {
    return this.cookieService.get('authToken');
  }

  logout() {
    this.deleteCookies();
  }

  setCookies(model: any) {
    this.cookieService.set('authToken', 'Bearer ' + model.token);
    this.cookieService.set('userId', model.id);
    this.cookieService.set('userEmail', model.email);
    this.cookieService.set('firstName', model.firstname);
    this.cookieService.set('lastName', model.lastname);
  }

  deleteCookies() {
    this.cookieService.delete('authToken');
    this.cookieService.delete('userId');
    this.cookieService.delete('userEmail');
    this.cookieService.delete('firstName');
    this.cookieService.delete('lastName');
  }
}
