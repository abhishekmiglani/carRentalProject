import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendDateService {

  date : Date;
  constructor() { }

  setDate(dateFromPage : Date){
      this.date = dateFromPage;
      console.log("Date set : "+ this.date);
  }

  getDate(){
    return this.date;
  }
}
