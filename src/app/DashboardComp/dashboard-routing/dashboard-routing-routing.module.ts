import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { WalletComponent } from '../wallet/wallet.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { CommonModule } from '@angular/common';


const dashboard_routes: Routes = [

  {
    path: 'blog',children: [
      {path:'',component:ProfileComponent},
      {path: 'wallet',component:WalletComponent},
      {path:':change-password',component : ChangePasswordComponent}
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
