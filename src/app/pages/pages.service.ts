import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private apiUrl = 'https://holarsamaj.in/api/';

  constructor(private http: HttpClient) {}

  userregister(data: any): Observable<any> {
    this.apiUrl += 'user/register';
    return this.http.post(this.apiUrl, data);
  }

}
