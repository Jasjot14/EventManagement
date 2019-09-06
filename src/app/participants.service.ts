import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  url=' http://localhost:5000/api/events/participants';
  constructor(private http: HttpClient) { }
  register(userData) {
    return this.http.post<any>(this.url, userData);
  }
}
