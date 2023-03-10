import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getStudentData():Observable<any>{
    return this.http.get('https://www.jsonblob.com/api/jsonblob/1083709409150124032');
  }
  getWeatherData():Observable<any>{
    return this.http.get('https://www.jsonblob.com/api/jsonblob/1083709409150124032');
  }
}
