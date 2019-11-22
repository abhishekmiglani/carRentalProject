import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/dashboard.service';
import { Booking } from 'app/bean/Booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }
  bookings:Booking[] = null;
  activeBooking:Booking =null;
  pastBookings:Booking[] = null;
  index;

  carBookedDate=new Date();
  day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  userId = 101;
  getBookingDetailsByUserId(userId){
    this.dashboardService.getBookings(userId).subscribe(bookingData=>{
      this.bookings = bookingData;
    })
  }
  testing(){
    alert(this.activeBooking)
   
  }
  ngOnInit() {
   /* for(let i=0 ; i<this.bookings.length;i++)
   {
    if(this.bookings[i].status==true)
      this.index = i;
   }  */
   /* this.activeBooking = this.bookings[this.index];
   this.pastBookings=this.bookings.splice(this.index,1) */

   if(this.activeBooking!=null){
    document.getElementById('activeBookingContainer').removeAttribute('class');
  }
  if(this.pastBookings!=null){
    document.getElementById('pastBookingContainer').removeAttribute('class');
  }


  }

}
