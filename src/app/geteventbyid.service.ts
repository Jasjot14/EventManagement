import { Injectable } from '@angular/core';
import {   HttpClient } from '@angular/common/http';
import { Events } from './events';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeteventbyidService {
  private _url ='http://localhost:5000/api/events/';
private url='http://localhost:5000/api/events/update';

  constructor(private http:HttpClient) { }
  getEvents(EventID): Observable<Events[]>{
   
    this._url=this._url+EventID;
    return this.http.get<Events[]>(this._url);
  }

  update(userdata, eventId) {
    
    userdata.eventId = eventId;
    //this.url = this.url + EventID;
    return this.http.post<any>(this.url,userdata);
  }
}
