import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { WalletComponent } from '../wallet/wallet.component';
import { Routes, RouterModule } from '@angular/router';

const dashboard_routes: Routes = [
  {
    path:"profile", component : ProfileComponent
  },
  {
    path:"change-password", component : ChangePasswordComponent
  },
  {
    path:"wallet", component : WalletComponent
  }
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(dashboard_routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
