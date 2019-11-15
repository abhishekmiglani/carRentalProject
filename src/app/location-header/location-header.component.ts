import { Component, OnInit } from "@angular/core";
import { GetLocationService } from 'app/get-location.service';

declare var $: any;

@Component({
  selector: "app-location-header",
  templateUrl: "./location-header.component.html",
  styleUrls: ["./location-header.component.css"]
})
export class LocationHeaderComponent implements OnInit {
  value: Date;
  valueDrop: Date;
  title = "Dummy";

  constructor(private locationService : GetLocationService) {}

  public locations = [];
  ngOnInit()
   {
    // $(function() {
    //   $("#locationMenu a").click(function() {
    //     console.log("Hey!");
    //     $("#selectedOption").text($(this).text());
    //     $("#selectedOption").val($(this).text());
    //   });
    // });

    $(function() {
      $("#locationMenu a").click(function() {
        console.log("Hey!");
        $("#selectedMenu").text($(this).text());
        $("#selectedMenu").val($(this).text());
      });
    });

    this.locationService.getLocationByCity().
    subscribe(data=>
     {
      this.locations=data;
      console.log(this.locations);
    });
  }

  runValidations(){
    if(this.value == null || this.valueDrop == null){
      window.alert("Please select date");  
    }
  }
}
