import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< Updated upstream
import { CookieService } from 'ngx-cookie-service';
=======
import { DashboardService } from 'app/dashboard.service';
import { UserCard } from 'app/Bean/UserCard';
>>>>>>> Stashed changes

declare var $:any;

@Component({
  selector: 'app-baners',
  templateUrl: './baners.component.html',
  styleUrls: ['./baners.component.css']
})
export class BanersComponent implements OnInit {
  
  cards:UserCard[];

<<<<<<< Updated upstream
  constructor(private router : Router , private cookieservice : CookieService) { }
   cookievalue:any;
  public message="Banglore,India";
=======
    constructor(private router : Router,private userCard:DashboardService) { }
  
>>>>>>> Stashed changes

  ngOnInit() {

    $(function() {
      $("#dropLocation a").click(function() {
        console.log("Hey!");
        $("#loc").text($(this).text());
        $("#loc").val($(this).text());
      });
    });

    this.cookievalue = this.cookieservice.get('location');



  }

  location(){
    this.cookievalue = this.cookieservice.get('location');
    console.log("message is" + this.message);
  }


  myValidation(){
    var a=document.getElementById("loc").innerText;
    
    if(a=="Location"){
      
   alert("Please select the Location");
    }
   else{
    this.router.navigateByUrl('/car');
<<<<<<< Updated upstream
    
   }
     
    
=======
   }  

    }
    fetchUserCardDetails(){
>>>>>>> Stashed changes

  this.userCard.getUserCardDetails().subscribe((data)=>this.cards=data)
    }


  }


