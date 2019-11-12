import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-baners',
  templateUrl: './baners.component.html',
  styleUrls: ['./baners.component.css']
})
export class BanersComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(function() {
      $("#dropLocation a").click(function() {
        console.log("Hey!");
        $("#loc").text($(this).text());
        $("#loc").val($(this).text());
      });
    });
  }
  myValidation(){
    var a=document.getElementById("loc").innerText;
    
    if(a=="Location"){
      
      confirm("Please select the Location");

     
    

    }

  }

  }

