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

   getProducts(): Observable<any>{
    return this.http.get("http://localhost:8080/product/allProducts");
  }

  addProduct(product:any):Observable<HttpEvent<{}>>
  {

    const formdata: FormData = new FormData();
   // formdata.append('file', file);
    formdata.append('product',product);
   
const headers = new HttpHeaders({'Content-Type': 'multipart/form-data'});

    const req = new HttpRequest('POST', 'http://localhost:8080/product/addProduct', formdata, {
   
      reportProgress: true,
      responseType: 'text'
    });

        return this.http.request(req);
  }


    

    




}
