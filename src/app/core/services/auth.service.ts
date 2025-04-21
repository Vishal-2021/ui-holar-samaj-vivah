import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { RegisterRequestModel } from '../models/register-request.model'; // A strong-typed model for registration data

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiBaseUrl}`;

  constructor(private http: HttpClient) {}

  // Register a new user
  register(userData: RegisterRequestModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user/register`, userData)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Centralized error handling
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Server-side error: ${error.status}, ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
