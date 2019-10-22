import { Component, OnInit } from '@angular/core';
import { Product } from "src/models/product.model";
import { ProductService } from "src/app/product.service";
import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


@Pipe({
  name: 'safeHtml'
})
export class ProductDetailsComponent implements OnInit, PipeTransform {
public products:any=[];
public ImgUrl = ' ';
// products: Product[]=[
//   new Product('R15','F:\clink\frontend\demov1\src\assets\BIKE.jpg',50000,'its a sport bike'),
//   new Product('R15','F:\clink\frontend\demov1\src\assets\BIKE.jpg',50000,'its a sport bike'),
//  new Product('R15','F:\clink\frontend\demov1\src\assets\BIKE.jpg',50000,'its a sport bike'),
//   new Product('R15','F:\clink\frontend\demov1\src\assets\BIKE.jpg',50000,'its a sport bike'),
//    new Product('R15','F:\clink\frontend\demov1\src\assets\BIKE.jpg',50000,'its a sport bike'),
//     new Product('R15','F:\clink\frontend\demov1\src\assets\BIKE.jpg',50000,'its a sport bike')
// ];

  constructor(private productService: ProductService,private sanitizer: DomSanitizer) { }
 transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
 ngOnInit() {
   this.ImgUrl = 'data:image/png;base64,' +'F:\clink\frontend\demov1\src\assets\BIKE.jpg' ;
    this.productService.getProducts().subscribe(
      data =>{
        this.products=data;
        console.log(this.products)
      },err =>{
        console.log(err);
      }
    )
  }

}