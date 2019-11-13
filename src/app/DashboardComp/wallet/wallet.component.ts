import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/dashboard.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  balance = 0.00;
  isTransaction = false;
  noTransaction = true;
  constructor(private dashboardService : DashboardService) { }


  getWalletDetails(){
    this.dashboardService.getWalletDetails().subscribe(walletData=>{
      this.balance = walletData.balance;
    })

  }
  ngOnInit() {


  }

}
