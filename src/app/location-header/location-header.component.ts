import { Component, OnInit, Input } from "@angular/core";
import { GetLocationService } from 'app/services/get-location.service';
import { CookieService } from 'ngx-cookie-service';
import { SendDateService } from 'app/services/send-date.service';

declare var $: any;

@Component({
  selector: "app-location-header",
  templateUrl: "./location-header.component.html",
  styleUrls: ["./location-header.component.css"]
})
export class LocationHeaderComponent implements OnInit {

  valuePickup: Date;
  valueDrop: Date;
  title = "Dummy";
  minimumDate = new Date();
  visible = false;
  
  @Input() public pickUp;
  @Input() public dropTime;
  @Input() public headerLocation;

  constructor(public locationService : GetLocationService, private cookieservice : CookieService,
            private dateService : SendDateService) {}

  public locations = [];
  public locality : any;
  ngOnInit() {
    
    this.locationService.getLocationByCity().
    subscribe(data=>
     {
      this.locations=data;
      console.log(this.locations);
    });
   
    this.valuePickup = this.pickUp;
    this.valueDrop = this. dropTime;
    console.log("location service value is"+ this.headerLocation);
    (<HTMLInputElement> document.getElementById('locationMenu')).value=this.headerLocation;
    }


  runValidations(){
    if(this.valuePickup == null || this.valueDrop == null){
      window.alert("Please select date");  
    }
  }
  
  // locationSelect(){
  //   $(function() {
  //     $("#locationMenu option").click(function() {
  //       $("#selectedOption").text($(this).text());
  //       $("#selectedOption").val($(this).text());
  //       console.log("inside method")
  //     });
  //   });
  // }

  setLocality(){
    this.locality =(<HTMLInputElement> document.getElementById('locationMenu')).value;
     this.locationService.setLocality(this.locality);
  }

  setDate(){
    console.log("inside set date");
        this.dateService.setDate(this.valuePickup  , this.valueDrop);
  }
     
  checkDate(){
    if (this.valuePickup==null) {
      alert("please select pickUp date first");
      this.visible=false;
      console.log("hello");
    } 
    else{
      this.visible = true;
    }
  }
 
}
