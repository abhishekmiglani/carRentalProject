import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';


const routes: Routes = [{path:"/carDetails",Component:CarDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
