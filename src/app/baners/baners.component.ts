import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-baners',
  templateUrl: './baners.component.html',
  styleUrls: ['./baners.component.css']
})
export class BanersComponent implements OnInit {

  constructor(private router : Router) { }

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
      
   alert("Please select the Location");
    }
   else{
    this.router.navigateByUrl('/car');
   }
     
    

    }

  }


