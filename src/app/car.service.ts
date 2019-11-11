import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }

  getCars():any{
    
    return  this.http.get("http://localhost:8082/cars")
     .pipe(map((dataList: any[]) =>{
        return dataList;
      }));

  }

}
