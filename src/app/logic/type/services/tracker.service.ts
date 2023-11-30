import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable } from 'rxjs';
import { backendUrl } from 'src/app/_environments/backend';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TrackerCreate, TrackerRead } from '../models/type';

@Injectable({
  providedIn: 'root',
})
export class TrackerService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  create(entity: TrackerCreate): Observable<TrackerCreate> {
    const id = this.cookieService.get('userId');
    const url = `${backendUrl.tracker}/${id}`;

    return this.http.post<TrackerCreate>(url, entity).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }

  getAll(): Observable<TrackerRead[]> {
    return this.http.get<TrackerRead[]>(backendUrl.tracker);
  }

  deleteById(id: number): Observable<void> {
    const url = `${backendUrl.tracker}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }
}
