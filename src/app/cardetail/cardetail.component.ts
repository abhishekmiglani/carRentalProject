import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadFileComponent } from 'app/upload-file/upload-file.component';
import { LoginService } from 'app/login.service';
import { LoginModalComponent } from 'app/login-modal/login-modal.component';
import { GetCarsService } from 'app/get-cars.service';
import { Car } from 'app/Bean/Car';
import { CarSelectComponent } from 'app/car-select/car-select.component';
import { ActivatedRoute, ParamMap } from '@angular/router';


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
 public carPackage;
  isLogged:boolean=false;
  
  constructor(private loginServ:LoginService, private getCarsService : GetCarsService,  private route : ActivatedRoute) { }

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

  ngOnInit() {
    $(function() {
      $("#sortMenu a").click(function() {
        console.log("Hey!");
        $("#selected").text($(this).text());
        $("#selected").val($(this).text());
      });
    });

   
    
    this.route.paramMap.subscribe((params : ParamMap) => {
      this.id = parseInt(params.get('modelNo'));
      console.log(this.id);

      this.getCarsService.getId(this.id);
   });

    this.getCarsService.getCarById()
    .subscribe(data => this.cars = data);

    this.carPackage =  this.getCarsService.getCarPackage();

  }
}
