import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable } from 'rxjs';
import { backendUrl } from 'src/app/_environments/backend';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity, ActivityCreate, ActivityRead } from '../models/activity';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  create(entity: ActivityCreate, typeId: number): Observable<ActivityCreate> {
    const userId = this.cookieService.get('userId');
    const url = `${backendUrl.activity}/${userId}/${typeId}`;
    const formattedDate = entity.startedOn.toString();

    const entityWithFormattedDate: ActivityCreate = {
      ...entity,
      startedOn: formattedDate,
    };

    return this.http.post<ActivityCreate>(url, entityWithFormattedDate).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }

  getAll(): Observable<ActivityRead[]> {
    return this.http.get<ActivityRead[]>(backendUrl.activity);
  }

  getById(id: number): Observable<Activity> {
    return this.http.get<Activity>(`${backendUrl.activity}/${id}`);
  }

  update(entity: Activity): Observable<Activity> {
    const url = `${backendUrl.activity}/${entity.id}`;
    return this.http.put<Activity>(url, entity).pipe(
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
}
