import { Component, OnInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {


  cardLast4Digits = "XXXX";
  validMonth = "XX";
  validYear = "XX";
  isCardSaved=true;
  cardLogo="/assets/masterCardLogo.png"
  items = [1,2];
  constructor() { }

  cardController(){
    
  }
  showEditModal(item){
    console.log(item);
    $("#editCardModal").modal('show');
  }

  showDeleteModal(item){
    console.log("delete"+item)
    $("#cardDeleteConfirm").modal('show');
  }
  

  ngOnInit():void {
    
  }

}
