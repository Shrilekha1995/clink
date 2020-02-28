import { Component, OnInit } from '@angular/core';
import { UploadFileService } from "src/app/upload-file.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private uploadFileService: UploadFileService) { }
  images:any[]=[]
  img:any;
  img1:any;
  ngOnInit() {
    this.uploadFileService.getFiles().subscribe(
      data=>
      {
        this.images=data
        console.log(data)
        this.img=this.images[0];
        this.img1=this.images[1];
        this.img="data:image/png;base64," + this.img;
        this.img1="data:image/jpg;base64," + this.img1;
    })
    //this.images
  }

}
