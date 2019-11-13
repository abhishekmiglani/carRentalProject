import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from 'app/location.service';

declare var $:any;

@Component({
  selector: 'app-baners',
  templateUrl: './baners.component.html',
  styleUrls: ['./baners.component.css']
})
export class BanersComponent implements OnInit {

  constructor(private router : Router,private data:LocationService) { }

  ngOnInit() {

    $(function() {

      this.data.currentMessage.subscribe(message=>this.message=message)

      $("#dropLocation a").click(function() {
        console.log("Hey!");
        $("#loc").text($(this).text());
        $("#loc").val($(this).text());
      });
    });
  }

  newMessage(){
    this.data.changedMessage("i am from ist child")
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


