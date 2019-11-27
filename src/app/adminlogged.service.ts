import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminloggedService {

  respose;
  constructor(private http:HttpClient) { }
 
   private _url="http:localhost:8080/admin";
   
   isAdminLogged(){
     this.http.get(this._url).subscribe(data=>{
       this.respose=data;
       console.log("Data received"+ data);
      });
     
     console.log("service admin" + this.respose);
   }

   
   adminLogin(admin: Admin): Observable<Boolean> {
    let url: string = "http://localhost:8080/login";
    return this.http.post<Boolean>(url, admin);
  }
   
}
