import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Events } from './events';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GeteventsService {
  private _url: string ='https://localhost:4001/api/events/get-events';

  constructor(private http:HttpClient) { }

  getEvents(): Observable<Events[]>{
    return this.http.get<Events[]>(this._url);
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}