import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/dashboard.service';
import { Card } from 'app/bean/Card';
import { User } from 'app/bean/User';
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
  cardDetails: Card[];
  deleteCardId;
  editCard: Card;
  validCvv;
  validName = "";
  userId = 1;

  constructor(private dashboardService: DashboardService) { }

  cardController() {

  }

  showAddCardModal() {
    $('#addCardModal').modal('show')
  }


  showEditModal(item: Card) {
    console.log(item);
    $("#editCardModal").modal('show');
    this.cardNumber = item.cardNum;
    this.tempCardNumber = item.cardNum;
    this.cardLast4Digits = item.cardNum;
    this.validMonth = item.expMonth;
    this.validYear = item.expYear;
    this.tempValidMonth = item.expMonth;
    this.tempValidYear = item.expYear;
    this.editCard = item;

  }

  showDeleteModal(item: Card) {
    console.log("delete" + item.cardId)
    $("#cardDeleteConfirm").modal('show');
    this.deleteCardId = item.cardId;
    console.log(this.deleteCardId)

  }

  enableConfirmButton(value) {
    /*  console.log(value) */
    /* console.log(document.getElementById('cardNum').value) */
    if ((this.cardNumber != this.tempCardNumber) && (this.cardNumber.length == 16))
      document.getElementById('editConfirmButton').removeAttribute('disabled')
    if (this.validMonth != this.tempValidMonth && this.validMonth.length == 2)
      document.getElementById('editConfirmButton').removeAttribute('disabled')
    if (this.validYear != this.tempValidYear && this.validYear.length == 2)
      document.getElementById('editConfirmButton').removeAttribute('disabled')
  }

  enableAddButton() {
    /*  console.log(value) */
    /* console.log(document.getElementById('cardNum').value) */
    if (this.cardNumber.length == 16 && this.validCvv.length==3 && this.validMonth.length==2 && this.validYear.length==2 && this.validName!=""){
      document.getElementById('addButton').removeAttribute('disabled')
    }
    else
      document.getElementById('addbutton').setAttribute('disabled','true')
  }

  getCardDetails(userId) {
    this.dashboardService.getCards(userId).subscribe(cardData => {
      this.cardDetails = cardData;
    })
  }
  addCard(){
    this.dashboardService.addCard(new Card(this.cardNumber,this.validCvv,this.validMonth,this.validYear,this.validName,new User(this.userId))).subscribe(data=>{
      alert("Card Has Been Added")
      this.getCardDetails(this.userId)
    })
  }

  deleteCard() {
    console.log(this.deleteCardId)
    this.dashboardService.deleteCardByCardId(this.deleteCardId).subscribe(data => {
      console.log(data);
      this.getCardDetails(1);
    });
  }
  updateCard() {
    this.editCard.cardNum = this.cardNumber;
    this.editCard.expMonth = this.validMonth;
    this.editCard.expYear = this.validYear;
    this.dashboardService.updateCard(this.editCard).subscribe(data => {
      console.log(data)
      this.getCardDetails(1);
    })

  }



  ngOnInit(): void {
    this.getCardDetails(1);

  }

}
