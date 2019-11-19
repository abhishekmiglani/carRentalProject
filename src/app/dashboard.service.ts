import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wallet } from "./Bean/Wallet";
import { Observable } from "rxjs";
import { WalletTransaction } from './bean/WalletTransaction';
import { Booking } from './bean/Booking';
import { Card } from './bean/Card';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  getWalletDetails(userId): Observable<Wallet> {
    let url = "http://localhost:8088/wallet/11";
    return this.http.get<Wallet>(url);
  }

  getWalletTransactions(walletId): Observable<WalletTransaction[]> {
    let url = "http://localhost:8088/walletTransactions/101" /* + walletId */;
    return this.http.get<WalletTransaction[]>(url);
  }

  enterWalletTransaction(walletTransaction){
    
    let url = "http://localhost:8088/walletTransactions/101";
    return this.http.post(url,walletTransaction);
  }

  getBookings(userId): Observable<Booking[]>{
    let url = "http://localhost:8083/bookings/"+userId;
    return this.http.get<Booking[]>(url);
  }

  getCards(userId): Observable<Card[]>{
    let url = "http://localhost:8085/user/"+userId+"/cards"
    return this.http.get<Card[]>(url);
  }




}
