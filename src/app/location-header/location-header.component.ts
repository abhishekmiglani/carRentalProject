import { Component, OnInit } from "@angular/core";
import { GetLocationService } from 'app/get-location.service';
import { CookieService } from 'ngx-cookie-service';

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


  constructor(public locationService : GetLocationService, private cookieservice : CookieService) {}

  public locations = [];
  public locality : string;
  ngOnInit() {
    this.locationService.getLocationByCity().
    subscribe(data=>
     {
      this.locations=data;
      console.log(this.locations);
    });
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
    this.locality = document.getElementById('locationMenu').value;
     this.locationService.setLocality(this.locality);
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
