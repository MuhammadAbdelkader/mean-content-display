import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { ApiResponse, StaticContent } from '../models/content-model';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getContent(): Observable<StaticContent> {
    return this.http.get<ApiResponse<StaticContent>>(`${this.apiUrl}/content`)
      .pipe(
        retry(2),
        map(response => response.data),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
