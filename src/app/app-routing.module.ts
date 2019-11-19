import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarSelectComponent } from './car-select/car-select.component';
import { BanersComponent } from './baners/baners.component';
import { CardetailComponent } from './cardetail/cardetail.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
        {
          path: "", component:BanersComponent
        },
       
        {
          path: "car", children:[
          {
            path:"", component: CarSelectComponent
          },
          {
            path: "payments" , component: PaymentComponent
          },
          {
            path: ":modelNo" , component: CardetailComponent
          }
         
        ]
        }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
