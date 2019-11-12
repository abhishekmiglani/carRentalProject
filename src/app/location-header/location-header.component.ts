import { Component, OnInit } from "@angular/core";

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

  constructor() {}

  ngOnInit() {
    $(function() {
      $("#locationMenu a").click(function() {
        console.log("Hey!");
        $("#selectedOption").text($(this).text());
        $("#selectedOption").val($(this).text());
      });
    });
  }

  runValidations(){
    console.log("Not null")
    if(this.value == null || this.valueDrop == null){
      window.alert("Please select date");  
    }
  }
}
