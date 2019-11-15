import { Component, OnInit } from "@angular/core";
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

  constructor(public locationService : GetLocationService, private cookieservice : CookieService,
            private dateService : SendDateService) {}

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

  setDate(){
        this.dateService.setDate(this.valuePickup, this.valueDrop);
  }
     
 
}
