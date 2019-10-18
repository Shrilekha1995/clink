import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
    this.http = http;
   }

   getProducts(): Observable<any>{
    return this.http.get("http://localhost:8080/product/allProducts");
  }
}
