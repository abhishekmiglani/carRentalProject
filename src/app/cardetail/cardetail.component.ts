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

  location:String;
  weekday_fare:number = 140;
  weekend_fare:number = 150;
  total_fare:number = this.weekday_fare+this.weekend_fare;
  duration:String="2h";

  isLogged:boolean=false;
  
  constructor(private loginServ:LoginService) { }

  @ViewChild(UploadFileComponent,{static:false}) upload:UploadFileComponent;
  @ViewChild(LoginModalComponent, {static:false} ) login:LoginModalComponent;
  modalState:boolean=false;
  checkBoxState:boolean=false;


  changeState(){
    
    if(this.loginServ.isLoggedIn==false){
     
      this.isLogged=true;
      this.upload.open();
      
    }
    else{
     
      this.isLogged=false;
      this.login.openModalDialog();
    }
    
  
  }
  changeQuickBookState(e:any){
    this.checkBoxState=e.target.checked;
    if(this.checkBoxState){
      document.getElementById("quick").removeAttribute("disabled");
    }
    else{
      document.getElementById("quick").setAttribute("disabled","true")
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
