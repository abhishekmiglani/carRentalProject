import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  editButtonHandler(inputId, buttonId){
    if(document.getElementById(buttonId).innerHTML=="Edit"){
      $("#"+inputId).removeAttr('disabled')
      document.getElementById(buttonId).className="input-group-text bg-success"
      document.getElementById(buttonId).innerHTML = "Save"
      document.getElementById(inputId).focus();
    }
   
    else if(document.getElementById(buttonId).innerHTML=="Save")
    {
      $("#"+inputId).attr('disabled','disabled')
      document.getElementById(buttonId).className="input-group-text bg-warning"
      document.getElementById(buttonId).innerHTML = "Edit"

    }
  }
  
  ngOnInit() {
  }

}
