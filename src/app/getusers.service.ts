import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Observable } from 'rxjs';
import { getusers } from './getusers';
@Injectable({
  providedIn: 'root'
})
export class GetusersService {

  private _url: string ='http://localhost:4000/users/getusers';

  constructor(private http:HttpClient) { }

  getUsers(): Observable<getusers[]>{
    return this.http.get<getusers[]>(this._url);
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
