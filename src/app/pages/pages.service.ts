import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private searchCriteria: any = {};

  // private apiUrl = 'https://holarsamaj.in/api/';
  private apiUrl = 'http://localhost/api/';

  constructor(private http: HttpClient) {}

  // ✅ User Registration
  userregister(data: any): Observable<any> {
    return this.http.post(this.apiUrl + 'user/register', data);
  }

  // ✅ Create / Update Profile
  userprofiles(data: any): Observable<any> {
    return this.http.post(this.apiUrl + 'user/profile', data);
  }

  // ✅ SEARCH PROFILES 
  searchProfiles(data: any): Observable<any> {
    return this.http.post(this.apiUrl + 'user/search', data);
  }

  // ✅ Save search criteria
  setCriteria(criteria: any) {
    this.searchCriteria = criteria;
  }

  // ✅ Get search criteria
  getCriteria() {
    return this.searchCriteria;
  }
}
