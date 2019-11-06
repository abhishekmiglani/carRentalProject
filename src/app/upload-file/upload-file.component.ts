import { Component, OnInit, Input, ViewChild } from '@angular/core';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  files: any = [];
  buttonState:boolean=false;

  uploadFile(event) {
    
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
      if(this.files.length==2){
        this.buttonState=true;
      }
    }  
  }
  deleteAttachment(index) {
    this.files.splice(index, 1);
    if(this.files.length==2){
      this.buttonState=true;
    }
    else{
      this.buttonState=false;
    }
  }
  open(){
    console.log("child");
    document.getElementById("openModal").click();
  }
  
  constructor() { }

  ngOnInit() {
  }

}

