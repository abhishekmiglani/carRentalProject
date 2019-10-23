import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { CarSelectComponent } from './car-select/car-select.component';
import { LocationHeaderComponent } from './location-header/location-header.component';
import { DragDropDirective } from './drag-drop.directive';
import { UploadFileComponent } from './upload-file/upload-file.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    PaymentOptionsComponent,
    CarSelectComponent,
    LocationHeaderComponent,
    DragDropDirective,
    UploadFileComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
