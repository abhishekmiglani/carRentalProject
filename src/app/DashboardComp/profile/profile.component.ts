import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/dashboard.service';
import { User } from 'app/bean/User';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  fullName = "XYZ";
  email = "xyz@123.com"
  mobile = "xxxxxxxxxx"
  totalHours = 0;
  totalDistance = 0 ;
  user:User;

  constructor(private dashboardService:DashboardService) { }

  async getUser(userId){
    this.dashboardService.getUserById(userId).subscribe(userData=>{
      this.user = userData;
      this.fullName = this.user.fullName;
      this.email = this.user.email;
      this.mobile = this.user.phone;
      this.uploadLicenseHandler()
    })

  }

  updateUser(btnId,inputId){
    
    if(document.getElementById(btnId).innerHTML=="Edit"){
      document.getElementById(btnId).innerHTML="Save"
      document.getElementById(btnId).className="input-group-text bg-success"
      document.getElementById(inputId).removeAttribute('disabled');
    }
    else{
      document.getElementById(btnId).innerHTML="Edit"
      document.getElementById(inputId).setAttribute("disabled","true")
      document.getElementById(btnId).className="input-group-text bg-info"

      this.user.fullName = this.fullName;
      this.user.phone = this.mobile;
      this.user.email = this.email;

      this.dashboardService.updateUser(this.user).subscribe(data=>console.log(data));
    }

    
  }
  uploadLicenseHandler(){
    if(this.user.frontLicenseImageUrl!=null)
    {
      document.getElementById('licenseBtn').innerHTML="<i class='fa fa-check' aria-hidden='true'></i> License Alerady Approved"
      document.getElementById('licenseBtn').setAttribute('disabled',"true")
      document.getElementById('licenseBtn').style.cursor = "not-allowed"
      
    }
  }


  ngOnInit() {
    this.getUser(1);
  }

}
