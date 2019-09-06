import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from 'src/app/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
 url='http://localhost:4000/Users/authentication';
 constructor(private http: HttpClient) { }
 register(userData) {

   return this.http.post<any>(this.url, userData);
 }

}

 

