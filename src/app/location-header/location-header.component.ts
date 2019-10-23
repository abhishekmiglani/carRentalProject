import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-header',
  templateUrl: './location-header.component.html',
  styleUrls: ['./location-header.component.css']
})
export class LocationHeaderComponent implements OnInit {
  value : Date;
  title = 'Dummy';

  constructor() { }

  ngOnInit() {
  }

}
