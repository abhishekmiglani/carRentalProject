import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadFileComponent } from 'app/upload-file/upload-file.component';
import { LoginService } from 'app/login.service';
import { HeaderComponent } from 'app/header/header.component';


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
  @ViewChild(HeaderComponent, {static:false} ) header:HeaderComponent;
  modalState:boolean=false;


  changeState(){
    console.log("parent");
    if(this.loginServ.isLoggedIn){
      this.isLogged=true;
      this.upload.open();
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
