import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddpostService {
  url='https://localhost:4001/api/events/event';
  constructor(private http: HttpClient) { }
  register(userData) {
    return this.http.post<any>(this.url, userData);
  }
}
