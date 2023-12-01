import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable } from 'rxjs';
import { backendUrl } from 'src/app/_environments/backend';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Type, TypeCreate } from '../models/type';

@Injectable({
  providedIn: 'root',
})
export class TypeService {
  constructor(private http: HttpClient) {}

  create(entity: TypeCreate): Observable<TypeCreate> {
    return this.http.post<TypeCreate>(backendUrl.type, entity).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }

  getAll(): Observable<Type[]> {
    return this.http.get<Type[]>(backendUrl.type);
  }

  getById(id: number): Observable<Type> {
    return this.http.get<Type>(`${backendUrl.type}/${id}`);
  }

  update(entity: Type): Observable<Type> {
    const url = `${backendUrl.type}/${entity.id}`;
    return this.http.put<Type>(url, entity).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }

  deleteById(id: number): Observable<void> {
    const url = `${backendUrl.type}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }
}
