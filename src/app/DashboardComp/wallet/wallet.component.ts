import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  amount = 0.00;
  isTransaction = false;
  noTransaction = true;
  constructor() { }

  ngOnInit() {
  }

}
