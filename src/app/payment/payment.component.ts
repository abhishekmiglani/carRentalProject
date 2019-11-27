import { Component, OnInit } from '@angular/core';
import { Booking } from 'app/bean/Booking';
import { Wallet } from 'app/Bean/Wallet';
import { WalletTransaction } from 'app/bean/WalletTransaction';
import { DashboardService } from 'app/dashboard.service';
import { BookingService } from 'app/services/booking.service';
import { Card } from 'app/bean/Card';
import { User } from 'app/bean/User';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  bookingData: Booking;
  cardNumber = "00";
  tempCardNumber;
  tempValidMonth;
  tempValidYear;
  validMonth;
  validYear;
  validCvv;
  validName;

  cardHolderName = "unk";
  isCardDetailsEntered = true;
  showCard = false;
  isCardSaved = false;
  cards: Card[];
  cardLogo = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.wsj.net%2Fim-45496%3Fwidth%3D620%26size%3D1.5&imgrefurl=https%3A%2F%2Fwww.wsj.com%2Farticles%2Fmastercard-drops-its-name-from-logo-11546858800&docid=McEmPa882hxj3M&tbnid=bBpiKDFGI00dOM%3A&vet=10ahUKEwjr68SO4qLlAhUSdCsKHS51DoQQMwhzKAAwAA..i&w=620&h=413&bih=528&biw=1280&q=mastercard%20logo&ved=0ahUKEwjr68SO4qLlAhUSdCsKHS51DoQQMwhzKAAwAA&iact=mrc&uact=8";

  wallet: Wallet = new Wallet();

  constructor(private dashboardService: DashboardService,
    private bookingService: BookingService) { }

  getWalletDetails() {
    this.dashboardService.getWalletDetails(1).subscribe(walletData => {
      this.wallet = walletData;
    })
  }

  bookingHandler() {
    this.bookingData = this.bookingService.getBookingData();
    this.bookingService.addBooking(this.bookingData)
    // console.log("hello" + this.bookingData.fromDate);
    if (this.wallet.balance >= this.bookingData.car.bookingPrice)
      this.bookingService.addBooking(this.bookingData).subscribe(data => {
        console.log(this.bookingData);
        alert("Booking Confirmed")
      });
  }

  walletTransactionHandler(amount) {
    this.dashboardService.enterWalletTransaction(new WalletTransaction("debit", amount, "Booking"))
    this.wallet.balance = this.wallet.balance - 0;
    this.dashboardService.updateWallet(this.wallet);
    this.getWalletDetails();
  }

  paymentAndBookingHandler() {
    this.walletTransactionHandler(this.bookingData.car.bookingPrice + 200 + 800);
    this.bookingHandler();

  }

  enableConfirmButton() {
    if ((this.cardNumber != this.tempCardNumber) && (this.cardNumber.length == 16))
      document.getElementById('editConfirmButton').removeAttribute('disabled')
    if (this.validMonth != this.tempValidMonth && this.validMonth.length == 2)
      document.getElementById('editConfirmButton').removeAttribute('disabled')
    if (this.validYear != this.tempValidYear && this.validYear.length == 2)
      document.getElementById('editConfirmButton').removeAttribute('disabled')
  }

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
    this.dashboardService.addCard(new Card(this.cardNumber, this.validCvv, this.validMonth, this.validYear, this.validName, new User(1))).subscribe(data=>
      {
        console.log("card has been added into the data base : " + data)
      })
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



  ngOnInit() {
    this.getWalletDetails()
    this.dashboardService.getCards(1).subscribe(data => {
      this.cards = data;
      console.log("card dAta==================" + this.cards);
      if (this.cards != null) {

        this.isCardDetailsEntered = false;
        this.showCard = true;
      }
    })

  }


}
