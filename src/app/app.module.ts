import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import * as $ from "jquery";
import * as bootstrap from "bootstrap";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { CarSelectComponent } from './car-select/car-select.component';
import { LocationHeaderComponent } from './location-header/location-header.component';
import { DragDropDirective } from './drag-drop.directive';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './DashboardComp/dashboard/dashboard.component';

import { CardetailComponent } from './cardetail/cardetail.component';
import { BanersComponent } from './baners/baners.component';
import { DashboardRoutingModule } from './DashboardComp/dashboard-routing/dashboard-routing.module';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { CitiesModalComponent } from './cities-modal/cities-modal.component';
import { HttpClientModule } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { GetCarsService } from './services/get-cars.service';
import { DashboardService } from './dashboard.service';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './services/user.service';
import { StorageServiceModule} from 'angular-webstorage-service';
import { AdminComponent } from './admin/admin.component';
import { AdminDeleteCarComponent } from './admin-delete-car/admin-delete-car.component';
import { EditCarComponent } from './edit-car/edit-car.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    PaymentOptionsComponent,
    CarSelectComponent,
    LocationHeaderComponent,
    DragDropDirective,
    UploadFileComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CardetailComponent,
    BanersComponent,
    LoginModalComponent,
    CitiesModalComponent,
    SignupComponent,
    AdminComponent,
    AdminDeleteCarComponent,
    EditCarComponent,
     ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    DashboardRoutingModule,
    StorageServiceModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCnWdxluRSHlGPLlmm_ozrxlH_9ABeEn3Y',
      libraries: ["places"]
    })
  ],
  providers: [CookieService,GetCarsService,DashboardService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
