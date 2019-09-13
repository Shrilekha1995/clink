import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileService } from '../upload-file.service';
import { DomSanitizer,SafeUrl } from '@angular/platform-browser';




@Component({
  selector: 'list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {

  showFile = false;
  fileUploads: Observable<string[]>;
  fileUpload: string;
  items:any=[];
  image:any;
  url:any;

  
  private sanitizer: DomSanitizer;
  private readonly imageType : string = 'data:image/PNG;base64,';
STRING_CHAR:String;
  
   

  constructor(private uploadService: UploadFileService,private domSanitizer: DomSanitizer) { }
 

// getImage(){
//        this.uploadService.getImage()
//            .subscribe((data :JsonString ) => {
//                this.image = this.sanitizer.bypassSecurityTrustUrl(this.imageType + data.content);
// })}


    ngOnInit() {
    // this.uploadService.getFiles().subscribe(
    //   data =>{

    //     console.log("1");
    //     this.image1=data;
    //     console.log(this.image1);
    //    //const TYPED_ARRAY = this.image1;
    //     // this.STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY); 
    //     this.url = this.domSanitizer.bypassSecurityTrustUrl('data:image/jpg;base64, ' +this.image1);
    //     console.log(this.url)
    //   // let var1=new Uint8Array;
    //   //console.log(this.url);
    // },err =>{
    //   console.log("2");
    //     console.log(err);
    //   }
    // )
  }
}
 

