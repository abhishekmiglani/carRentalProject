import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { UserService } from 'app/services/user.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';



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

  fileFront:File;
  fileBack:File;
  constructor(private userService:UserService,@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }
  previewFront(files) {
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
  previewBack(files) {
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
  uploadFileFront(event,files) {
    this.fileFront =files[0];
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
      if(this.files.length==2){
        this.buttonState=true;
      }
    }
    this.previewFront(files);  
  }

  uploadFileBack(event,files) {
    this.fileBack = files[0];
    console.log("qwerasdf:"+this.fileBack)
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
      if(this.files.length==2){
        this.buttonState=true;
      }
    }
    this.previewBack(files);  
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
  uploadResult;
  onUploadFile() {
    let email=localStorage.getItem("email");
    let user = {
      fullName: null,
      email: email,
      phone: null,
      password: null,
      backLicenseImageUrl: this.fileBack,
      frontLicenseImageUrl: this.fileFront,
      userId: null
    };
    this.userService.postLicenseFile(user,this.fileFront,this.fileBack).subscribe(data => {
      this.uploadResult = data;
      console.log("upload:"+this.uploadResult)
      if(this.uploadResult==true){
        
        this.storage.set("uploadStatus",this.uploadResult);

      }
     
    });
    }
 

  ngOnInit() {
  }

}

