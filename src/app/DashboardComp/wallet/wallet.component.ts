import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/dashboard.service';
import { WalletTransaction } from 'app/bean/WalletTransaction';
declare var $: any;

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  balance = 0.00;
  amount:number;
  walletTransactions: WalletTransaction[];
  walletTransaction:WalletTransaction = new WalletTransaction();
  /* walletTransaction = ["credit", "debit","credit","credit","debit","credit"]; */
  walletId;
  userId;

  constructor(private dashboardService: DashboardService) { }


  getWalletDetails() {
    this.dashboardService.getWalletDetails(this.userId).subscribe(walletData => {
      this.balance = walletData.balance;
      this.walletId = walletData.walletId;
    })
  }

  async getWalletTransactions() {
    this.dashboardService.getWalletTransactions(this.walletId).subscribe(walletTransactionData => {
      this.walletTransactions = walletTransactionData;
      this.isTransactionRecord();
     
      /* console.log(walletTransactionData); */
    })
  }
  isTransactionRecord(){
    if (this.walletTransactions != null) {
      document.getElementById('walletTransactionContainer').className = "wallet-transaction shadow-sm p-3 mb-5 bg-white rounded";
      /* document.getElementById('noTransaction').innerHTML = ""; */
      console.log("Its in the null ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    }
  }

  addMoneyHandler(){
   this.balance = this.balance+this.amount;
   alert(this.amount)
   this.walletTransaction.transactionAmount = this.amount;
   this.walletTransaction.transactionDate = new Date();
   this.walletTransaction.transactionDetail = "Added Money to wallet by you"
   this.walletTransaction.transactionType = "credit";
   
   this.dashboardService.enterWalletTransaction(this.walletTransaction).subscribe(data=>{
     console.log(data);
   });
  }
  ngOnInit() {
    this.getWalletDetails();
    this.getWalletTransactions();
  }

}
