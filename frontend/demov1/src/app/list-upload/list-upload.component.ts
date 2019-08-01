import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadFileService } from '../upload-file.service';

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
   

  constructor(private uploadService: UploadFileService) { }
 


  ngOnInit() {
  }

  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.items = this.uploadService.getFiles();
    }
  }
}
