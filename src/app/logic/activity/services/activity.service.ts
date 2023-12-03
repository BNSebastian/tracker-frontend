import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable } from 'rxjs';
import { backendUrl } from 'src/app/_environments/backend';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Activity,
  ActivityCreate,
  ActivityRead,
  ActivityUpdate,
} from '../models/activity';
import { TimeElapsed } from '../models/time';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  create(entity: ActivityCreate, typeId: number): Observable<ActivityCreate> {
    const userId = this.cookieService.get('userId');
    const url = `${backendUrl.activity}/${userId}/${typeId}`;

    return this.http.post<ActivityCreate>(url, entity).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }

  getAll(): Observable<ActivityRead[]> {
    return this.http.get<ActivityRead[]>(backendUrl.activity);
  }

  getById(id: number): Observable<ActivityRead> {
    return this.http.get<ActivityRead>(`${backendUrl.activity}/${id}`);
  }

  update(entity: ActivityUpdate): Observable<ActivityUpdate> {
    const url = `${backendUrl.activity}`;
    return this.http.put<ActivityUpdate>(url, entity).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }

  deleteById(id: number): Observable<void> {
    const url = `${backendUrl.activity}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }

  getTime(): Observable<any[]> {
    const userId = this.cookieService.get('userId');
    return this.http.get<any[]>(`${backendUrl.getTime}/${userId}`);
  }
}
