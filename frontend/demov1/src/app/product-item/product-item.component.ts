import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { Product } from "src/models/product.model";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() product:Product;
  constructor() { }

  ngOnInit() {
  }

}
