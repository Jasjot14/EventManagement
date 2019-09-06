import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs'; 
import { Userlogin } from './userlogin';
@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  private currentUserSubject: BehaviorSubject<Userlogin>;
  public currentUser: Observable<Userlogin>;
 url='http://localhost:4000/Users/authenticate';
 constructor(private http: HttpClient) { }
 register(userData) {
   return this.http.post<any>(this.url, userData);
 }
}
