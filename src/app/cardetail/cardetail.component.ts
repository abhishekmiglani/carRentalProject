import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadFileComponent } from 'app/upload-file/upload-file.component';
import { LoginService } from 'app/services/login.service';
import { LoginModalComponent } from 'app/login-modal/login-modal.component';
import { GetCarsService } from 'app/services/get-cars.service';
import { Car } from 'app/Bean/Car';
import { CarSelectComponent } from 'app/car-select/car-select.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GetLocationService } from 'app/services/get-location.service';
import { SendDateService } from 'app/services/send-date.service';


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
  
  constructor(private loginServ:LoginService, private getCarsService : GetCarsService, 
     private route : ActivatedRoute, private locationService : GetLocationService,
      private dateService : SendDateService) { }

  @ViewChild(UploadFileComponent,{static:false}) upload:UploadFileComponent;
  @ViewChild(LoginModalComponent, {static:false} ) login:LoginModalComponent;
  @ViewChild(CarSelectComponent, {static:false} ) carSelect:CarSelectComponent;

  modalState:boolean=false;
  checkBoxState:boolean=false;
 
  public cars:Car;

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

  id: any;
  package :any;
  carPackage :any;
  locality: any;
  dates = [];
  pickup : Date;
  drop  :Date;
  month = ["Jan","Feb","Mar","Apr","may","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  


  ngOnInit() {
    $(function() {
      $("#sortMenu a").click(function() {
        console.log("Hey!");
        $("#selected").text($(this).text());
        $("#selected").val($(this).text());
      });
    });

    

    this.route.paramMap.subscribe((params : ParamMap) => {
      this.id = parseInt(params.get('modelNo')),
      this.package = parseInt(params.get('package'))
      console.log(this.package);
      
      this.getCarsService.getId(this.id);
   });

    this.getCarsService.getCarById()
    .subscribe(data => this.cars = data);

     this.carPackage =  this.getCarsService.getCarPackage();
     this.locality = this.locationService.getLocality();
      this.dates = this.dateService.getDate();
      this.pickup = this.dates[0];
      this.drop = this.dates[1];
      console.log("ts file date" + this.pickup + this.drop);
      if(this.pickup.getHours()>12){
  
        document.getElementById('timeZone').innerHTML="PM"
  }

      
  }
}
