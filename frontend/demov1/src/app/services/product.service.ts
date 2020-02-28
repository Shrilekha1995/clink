import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpRequest } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getProducts(): Observable<any> {
    return this.http.get("http://localhost:8080/product/allProducts");
  }

  addProduct(product: any): Observable<any> {
    return this.http.post('http://localhost:8080/product/addProduct', product);
  }

}
