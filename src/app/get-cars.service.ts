import { Injectable, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Car } from "./Bean/cars";
import { Observable } from "rxjs";
import { CardetailComponent } from './cardetail/cardetail.component';

@Injectable({
  providedIn: "root"
})
export class GetCarsService {
  
  public _url2: string;
  constructor(private http: HttpClient) {}

  public id : number;
  private _url: string = "http://localhost:8082/cars";

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this._url);
  }

  getId(carId: number){
      this.id = carId;
      this._url2= "http://localhost:8082/cars/"+this.id;
      console.log(this.id);
  }

  getCarById() : Observable<Car>{
    return this.http.get<Car>(this._url2);
  }
}
