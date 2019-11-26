import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "app/Bean/User";

@Injectable({
  providedIn: "root"
})

export class UserService {
  constructor(private http: HttpClient) {}
  
  getAllUsers(): Observable<User[]> {
    let url: string = "http://localhost:8099/userservice/users";
    return this.http.get<User[]>(url);
  }

    adduser(user: User) : Observable<Boolean>{
    let url: string = "http://localhost:8099/userservice/users";
    return this.http.post<Boolean>(url, user);
  }

    userLogin(user: User) : Observable<Boolean>{
    let url: string = "http://localhost:8099/userservice/users/login";
    return this.http.post<Boolean>(url, user);
    }

    logout(){
      localStorage.clear();
    }
    postFrontFile(frontData,email): Observable<number> {
      console.log("user service")
      const endpoint = 'http://localhost:8099/userservice/users/front/'+email;

      
      return  this.http.put<number>(endpoint, frontData);
 
       

        
}
postBackFile(backData,email): Observable<number> {
  console.log("user service2")

  const endpoint2 = 'http://localhost:8099/userservice/users/back/qwerty@gmail.com'+email;
  

  return this.http.put<number>(endpoint2, backData);
   

    
}
}

