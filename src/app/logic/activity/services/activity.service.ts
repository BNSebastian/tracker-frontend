import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable } from 'rxjs';
import { backendUrl } from 'src/app/_environments/backend';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivityCreate, ActivityRead } from '../models/activity';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  create(entity: ActivityCreate): Observable<ActivityCreate> {
    const id = this.cookieService.get('userId');
    const url = `${backendUrl.activity}/${id}`;

    return this.http.post<ActivityCreate>(url, entity).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }

  getAll(): Observable<ActivityRead[]> {
    return this.http.get<ActivityRead[]>(backendUrl.activity);
  }

  deleteById(id: number): Observable<void> {
    const url = `${backendUrl.activity}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }
}
