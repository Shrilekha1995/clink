import { Component, OnInit } from '@angular/core';
import { Product } from "src/models/product.model";
import { ProductService } from "src/app/product.service";
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
    selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  product:Product;
  constructor(private productService:ProductService) { 

    this.product=new Product();
  }
 selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  ngOnInit() {
  }

saveProduct(product:any){

this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.product.productFile=this.currentFileUpload;
    this.productService.addProduct(product).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    this.selectedFiles = undefined;
  }
 
}


