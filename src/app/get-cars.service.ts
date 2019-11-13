import { Injectable, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Car } from "./Bean/cars";
import { Observable } from "rxjs";
import { CardetailComponent } from './cardetail/cardetail.component';

@Injectable({
  providedIn: "root"
})
export class GetCarsService {
  private _url2: string;
  constructor(private http: HttpClient) {}

  public carId : number;
  private _url: string = "http://localhost:8082/cars";

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this._url);
  }

  getcarId(id: number){
      this.carId = id;
      this._url2= "http://localhost:8082/cars/"+this.carId;
      console.log(this.carId);
  }

  getCarById() : Observable<Car>{
    return this.http.get<Car>(this._url2);
  }
}
