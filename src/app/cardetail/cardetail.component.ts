import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadFileComponent } from 'app/upload-file/upload-file.component';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  constructor() { }
  @ViewChild(UploadFileComponent,{static:false}) upload:UploadFileComponent;
  modalState:boolean=false;


  changeState(){
    console.log("parent");
  this.upload.open();
  }



  ngOnInit() {
  }

}
