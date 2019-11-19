import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/dashboard.service';
import { Card } from 'app/bean/Card';
declare var $: any;

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  cardNumber = "XXXXXXXXXXXXXXXX"
  tempCardNumber = "XXXXXXXXXXXXXXXX"
  cardLast4Digits = "XXXX";
  validMonth = "XX";
  tempValidMonth = "XX";
  validYear = "XX";
  tempValidYear = "XX";
  isCardSaved = true;
  cardLogo = "/assets/masterCardLogo.png"
  cardDetails:Card[];

  
  constructor(private dashboardService:DashboardService) { }

  cardController() {

  }
  showEditModal(item) {
    console.log(item);
    $("#editCardModal").modal('show');
  }

  showDeleteModal(item) {
    console.log("delete" + item)
    $("#cardDeleteConfirm").modal('show');
  }

  enableConfirmButton(value) {
    /*  console.log(value) */
    /* console.log(document.getElementById('cardNum').value) */
    if ((this.cardNumber != this.tempCardNumber) && (this.cardNumber.length == 16))
      console.log("working")
    if (this.validMonth != this.tempValidMonth && this.validMonth.length == 2)
      console.log("working")
    if (this.validYear != this.tempValidYear && this.validYear.length == 2)
      console.log("working")

  }

  getCardDetails(userId){
    this.dashboardService.getCards(userId).subscribe(cardData=>{
      this.cardDetails=cardData;
      console.log(this.cardDetails);
    })
  }

  ngOnInit(): void {
    this.getCardDetails(11);

  }

}
