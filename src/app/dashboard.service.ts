import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wallet } from "./Bean/Wallet";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient ) {
  }

  getWalletDetails(): Observable<Wallet>{
    let url = "";
    return this.http.get<Wallet>(url);
  }
}
