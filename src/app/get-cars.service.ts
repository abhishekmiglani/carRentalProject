import { Injectable, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Car } from "./Bean/cars";
import { Observable } from "rxjs";
import { CardetailComponent } from './cardetail/cardetail.component';

@Injectable({
  providedIn: "root"
})
export class GetCarsService {
  constructor(private http: HttpClient) {}
  
 public id:String;
 public _url2: string;
  private _url: string = "http://localhost:8082/cars";
  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this._url);
  }

 getid(carid:String){
   this.id = carid;
   this._url2= "http://localhost:8082/cars"+"/"+this.id;
   console.log("service id" + this.id);
 }
 
 

  getCarById() : Observable<Car>{
    return this.http.get<Car>(this._url2);
  }
}
