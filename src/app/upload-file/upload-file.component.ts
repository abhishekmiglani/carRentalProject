import { Component, OnInit, Input, ViewChild } from '@angular/core';



@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  files: any = [];
  public imagePath;
  public imagePath2;
  url:any[]=[];
  public message: string;
  buttonState:boolean=false;
  constructor() { }
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.url.push(reader.result); 
    }
  }
 
  uploadFile(event,files) {
    
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
      if(this.files.length==2){
        this.buttonState=true;
      }
    }
    this.preview(files);  
  }

  
  deleteAttachment(index) {
    this.url.splice(index,1);
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
    document.getElementById("openModal2").click();
  }
  
 

  ngOnInit() {
  }

}

