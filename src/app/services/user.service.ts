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
    postLicenseFile(user:User,frontImg:File,backImg:File): Observable<Boolean> {
      const endpoint = 'http://localhost:8081/users';
      this.http.post("https://www.dropbox.com/request/HpWEP1Ix1tBDBwonS1sM",frontImg);
      this.http.post("https://www.dropbox.com/request/HpWEP1Ix1tBDBwonS1sM",backImg);
       return this.http.put<Boolean>(endpoint, user);
        
}
}
