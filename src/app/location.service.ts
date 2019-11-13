import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  private messageSource =new  BehaviorSubject<String>("default message")
  currentMessage=this.messageSource.asObservable();

  constructor() { }

  changedMessage( message:String){
    this.messageSource.next(message)
  }



}
