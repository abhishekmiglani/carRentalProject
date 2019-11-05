import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  constructor() { }

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
