import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Car } from "./Bean/Car";
import { Observable } from "rxjs";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: "root"
})
export class GetCarsService {
  constructor(private http: HttpClient, private cookieService : CookieService) {}

  public id: number;
  private _url: string
  public _url2: string;
  public package: any = "No Package"
  public city;

  getCars(): Observable<Car[]> {
    this.city = this.cookieService.get('location');
    console.log("inside get cars method" + this.city);
    this._url = "http://localhost:8082/cars/list/"+this.city;
    return this.http.get<Car[]>(this._url);
  }

  getId(carId: number) {
    this.id = carId;
    this._url2 = "http://localhost:8082/cars/" + this.id;
    console.log(this.id);
  }

  getCarById(): Observable<Car> {
    return this.http.get<Car>(this._url2);
  }

  setCarPackage(carPackage : any){
      this.package = carPackage;
      this.getCarPackage();
  }

  getCarPackage(){
      return this.package;
  }
}
