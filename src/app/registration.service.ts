import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
url='http://localhost:4000/Users/register';
  constructor(private http: HttpClient) { }
  register(userData) {
    return this.http.post<any>(this.url, userData);
  }
}
