import { Component, OnInit } from '@angular/core';
import { AdminloggedService } from 'app/adminlogged.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLogin(){
    let adminLogin = (<HTMLInputElement>document.getElementById("adminLogin")).value;
    let adminPassword = (<HTMLInputElement>document.getElementById("adminPassword")).value;
    let admin = {
      userName : adminLogin,
      password : adminPassword
    }
    let loginResult;
    this.loginService.adminLogin(admin).subscribe(data => {
      loginResult = data} );
  }

  constructor(private loginService : AdminloggedService) {
   }

  ngOnInit() {
  }

}
