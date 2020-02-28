import { Component, OnInit } from '@angular/core';
import { Product } from "src/models/product.model";
import { ProductService } from "src/app/services/product.service";
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
    selectedFiles;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  product:Product;
  imgURL: any;
  constructor(private productService:ProductService,private http: HttpClient,private router:Router) { 

    this.product=new Product();
  }
 selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  ngOnInit() {
  }

    public onFileChanged(event) {
    console.log(event);
    this.selectedFiles = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
    

  }

saveProduct(product:any){

 const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFiles, this.selectedFiles.name);
    this.selectedFiles.imageName = this.selectedFiles.name;

    this.http.post('http://localhost:8080/product/upload', uploadData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.productService.addProduct(this.product).subscribe(
            (data) => {
              console.log(data);
              this.router.navigate(['home']);
            },
            (err)=>{
              console.log(err)
            }
          );
          console.log('Image uploaded successfully');
        } else {
          console.log('Image  uploade failed');
        }
      }
      );
  }
 
}


