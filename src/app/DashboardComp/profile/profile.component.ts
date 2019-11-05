import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  fullName = "XYZ";
  email = "xyz@123.com"
  mobile = "xxxxxxxxxx"
  totalHours = 0;
  totalDistance = 0 ;

  constructor() { }

  ngOnInit() {
  }

}
