import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GetCarsService } from 'app/get-cars.service';
declare var $: any;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  ngOnInit(): void {
  }

  isOldPasswordCorrect = true;
  currentPassword = "";
  tempCurrentPassword = ""
  newPassword = "";

  passwordResetForm: FormGroup;
  constructor(private ggetcarService: GetCarsService) {

  }
  validationHandler(){
    if(this.currentPassword!="" && this.newPassword!="")
      console.log("working")
  }
  passwordUpdateHandler(){
   
  }
}
