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
    let url: string = "http://localhost:8081/users";
    return this.http.get<User[]>(url);
  }

    adduser(user: User) : Observable<Boolean>{
    let url: string = "http://localhost:8081/users";
    return this.http.post<Boolean>(url, user);
  }

    userLogin(user: User) : Observable<Boolean>{
    let url: string = "http://localhost:8081/users/login";
    return this.http.post<Boolean>(url, user);
    }

    logout(){
      localStorage.clear();
    }
}
