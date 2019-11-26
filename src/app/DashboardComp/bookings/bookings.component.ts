import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/dashboard.service';
import { Booking } from 'app/bean/Booking';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(private dashboardService: DashboardService, private datePipe : DatePipe) { }
  bookings: Booking[] = null;
  activeBooking: Booking = new Booking();
  pastBookings: Booking[] = null;
  index;

  carBookedDate = new Date();
  day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  userId = 1;

  getBookingDetailsByUserId(userId) {
    console.log("my date::"+new Date())
    this.dashboardService.getBookings(userId).subscribe(bookingData => {
      this.bookings = bookingData;
      for (let i = 0; i < this.bookings.length; i++) {
        if (this.bookings[i].status == true){
          this.index = i;
          this.activeBooking = this.bookings[i];  
          this.activeBooking.bookingDate = new Date(this.activeBooking.bookingDate)
          this.activeBooking.tillDate = new Date(this.activeBooking.tillDate);
          this.activeBooking.fromDate = new Date(this.activeBooking.fromDate)     
        }
        else
        {
          this.bookings[i].fromDate = new Date(this.bookings[i].fromDate);
          this.bookings[i].tillDate = new Date(this.bookings[i].tillDate);
          this.bookings[i].bookingDate = new Date(this.bookings[i].bookingDate);
          this.pastBookings.push(this.bookings[i]);
        }     
      }
      if (this.activeBooking != null) {
        document.getElementById('activeBookingContainer').removeAttribute('class');
      }
      if (this.pastBookings != null) {
        document.getElementById('pastBookingContainer').removeAttribute('class');
      }

    });
  }
  testing() {
    // alert(this.activeBooking)\
    this.getBookingDetailsByUserId(1);

  }
  ngOnInit() {
    this.getBookingDetailsByUserId(1);
  }

}
