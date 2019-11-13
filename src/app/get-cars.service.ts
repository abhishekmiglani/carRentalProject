import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Car } from "./Bean/cars";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GetCarsService {
  constructor(private http: HttpClient) { }

  private _url: string = "http://localhost:8082/cars";


  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this._url);
  }

  private _url2: string = "http://localhost:8089/cars/id";

  getCarById() : Observable<Car[]>{
    return this.http.get<Car[]>(this._url2);
  }
}