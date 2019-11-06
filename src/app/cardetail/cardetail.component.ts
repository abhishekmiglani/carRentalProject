import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadFileComponent } from 'app/upload-file/upload-file.component';
import { LoginService } from 'app/login.service';
import { LoginModalComponent } from 'app/login-modal/login-modal.component';


declare var $: any;
@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  isLogged:boolean=false;
  
  constructor(private loginServ:LoginService) { }

  @ViewChild(UploadFileComponent,{static:false}) upload:UploadFileComponent;
  @ViewChild(LoginModalComponent, {static:false} ) login:LoginModalComponent;
  modalState:boolean=false;


  changeState(){
    
    if(this.loginServ.isLoggedIn){
     
      this.isLogged=true;
      this.upload.open();
      
    }
    else{
     
      this.isLogged=false;
      this.login.openModalDialog();
    }
    
  
  }

  ngOnInit() {
    $(function() {
      $("#sortMenu a").click(function() {
        console.log("Hey!");
        $("#selected").text($(this).text());
        $("#selected").val($(this).text());
      });
    });
  }

  

}
