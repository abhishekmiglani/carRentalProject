import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { WalletComponent } from '../wallet/wallet.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { CommonModule } from '@angular/common';

import {  BankDetailsComponent } from '../bank-details/bank-details.component';

import { DashboardComponent } from '../dashboard/dashboard.component';


const dashboard_routes: Routes = [

  {

    path: 'dashboard', children: [
      {
        path: '',
        component: ProfileComponent
      },
      {
        path: 'wallet',
        component: WalletComponent
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent
      },
      {
        path:'saved-cards',
        component : BankDetailsComponent
      }

    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboard_routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingRoutingModule { }
