import { Component, OnInit } from '@angular/core';
import { GetCarsService } from 'app/services/get-cars.service';
import { GetLocationService } from 'app/services/get-location.service';
import { SendDateService } from 'app/services/send-date.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  carPackage: any;
  cars: import("c:/Users/AnkushVerma/Documents/GitHub/carRentalProject/src/app/Bean/Car").Car;
  locality: any;
  dates: any[];
  pickup: any;
  drop: any;

  constructor(private getCarsService: GetCarsService,
              private locationService: GetLocationService,
              private dateService : SendDateService
    
    
    ) { }
  ngOnInit() {
    this.getCarsService.getCarById().subscribe(data =>(this.cars=data));
    this.carPackage = this.getCarsService.getCarPackage();
    this.locality = this.locationService.getLocality();
    this.dates = this.dateService.getDate();
    this.pickup = this.dates[0];
    this.drop = this.dates[1];
    console.log("ts file date" + this.pickup + this.drop);
    console.log("service locality" + this.locality);
  

  }
  cardNumber="00";
  validMonth;
  validYear;
  cardHolderName="unk";
  isCardDetailsEntered = false;
  showCard = false;
  isCardSaved = true;
  cardLogo = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.wsj.net%2Fim-45496%3Fwidth%3D620%26size%3D1.5&imgrefurl=https%3A%2F%2Fwww.wsj.com%2Farticles%2Fmastercard-drops-its-name-from-logo-11546858800&docid=McEmPa882hxj3M&tbnid=bBpiKDFGI00dOM%3A&vet=10ahUKEwjr68SO4qLlAhUSdCsKHS51DoQQMwhzKAAwAA..i&w=620&h=413&bih=528&biw=1280&q=mastercard%20logo&ved=0ahUKEwjr68SO4qLlAhUSdCsKHS51DoQQMwhzKAAwAA&iact=mrc&uact=8";
  focusYearTab() {
  //  if (document.getElementById('creditCardExpiryMonth').value.length > 1)
  //    document.getElementById('creditCardExpiryYear').focus();
  }
  blurYearTab() {
    //  if (document.getElementById('creditCardExpiryMonth').value > 12){
    //   document.getElementById('creditCardExpiryMonth').style.border="1px red solid";}
    // else{
    // document.getElementById('creditCardExpiryMonth').style.border="1px rgba(211, 211, 211, 0.795) solid";}
  }
  cardHandler() {
    this.isCardDetailsEntered = false;
    this.showCard = true;
  }

  showDeleteModal(item) {
    console.log("delete" + item)
    $("#cardDeleteConfirm").modal('show');
  }
  showEditModal(item) {
    console.log(item);
    $("#editCardModal").modal('show');
  }
  



}
