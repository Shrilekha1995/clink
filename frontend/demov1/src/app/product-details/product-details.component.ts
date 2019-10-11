import { Component, OnInit } from '@angular/core';
import { Product } from "src/models/product.model";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

products: Product[]=[
  new Product('R15','F:\clink\frontend\demov1\src\assets\BIKE.jpg',50000,'its a sport bike'),
  new Product('R15','F:\clink\frontend\demov1\src\assets\BIKE.jpg',50000,'its a sport bike')
];
  constructor() { }

  ngOnInit() {
  }

}
