import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Car } from "./Bean/Car";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GetCarsService {
  



  constructor(private http: HttpClient) {}

  public id : number;
  public _url2:string;

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
