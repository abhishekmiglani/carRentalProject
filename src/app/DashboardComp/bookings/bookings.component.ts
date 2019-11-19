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
  bookings:Booking[];
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
    alert(this.months[this.carBookedDate.getMonth()])
  }
  ngOnInit() {
    
  }

}
