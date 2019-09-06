import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DeleteeventsService {
  
 url='http://localhost:5000/api/events/delete/';
 constructor(private http: HttpClient) { }
 delete(EventID) {
   this.url = this.url + EventID;
   return this.http.post<any>(this.url, null);
 }
}
