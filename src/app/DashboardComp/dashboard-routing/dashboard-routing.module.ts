import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingRoutingModule } from './dashboard-routing-routing.module';
import { ProfileComponent } from '../profile/profile.component';
import { WalletComponent } from '../wallet/wallet.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';


@NgModule({
  declarations: [
    ProfileComponent,
    WalletComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingRoutingModule
  ]
})
export class DashboardRoutingModule { }
