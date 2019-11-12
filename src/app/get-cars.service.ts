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
  
id:any;

  

  private _url: string = "http://localhost:8082/cars";


  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this._url);
  }

 getid(carid:any){
   this.id = carid;
   console.log("service id" + this.id);
 }
 
  private _url2: string = "http://localhost:8089/cars/"+this.id;

  getCarById() : Observable<Car[]>{
    return this.http.get<Car[]>(this._url2);
  }
}
