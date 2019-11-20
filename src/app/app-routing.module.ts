import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarSelectComponent } from './car-select/car-select.component';
import { BanersComponent } from './baners/baners.component';
import { CardetailComponent } from './cardetail/cardetail.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDeleteCarComponent } from './admin-delete-car/admin-delete-car.component';
import { EditCarComponent } from './edit-car/edit-car.component';

const routes: Routes = [
  {
      path: "admin", component:AdminComponent,
  },

  {
    path: "admin/deletecar", component:AdminDeleteCarComponent
  },
  {
        path: "admin/editcar", component:EditCarComponent
   },
  
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
