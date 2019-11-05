import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarSelectComponent } from './car-select/car-select.component';
import { BanersComponent } from './baners/baners.component';



const routes: Routes = [{path: "", component:BanersComponent},{path: "car", component: CarSelectComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
