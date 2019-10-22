import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "src/app/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  [x: string]: any;
  emails:string;

  public loggedin: any = {};
  constructor(private http: HttpClient) {
    this.http = http;
  }


  setData(value: string) { 
    this.emails=value; 
  } 

  getData():string { 
    return this.emails; 
  } 

  getUsers(): Observable<any>{
    return this.http.get("http://localhost:8080/users");
  }

  
  saveUser(user,token:any): Observable<any> {
    const headers = new HttpHeaders({'Authorization':'Bearer '+token,'Access-Control-Allow-Origin':'*'});
    return this.http.post("http://localhost:8080/save",user,{
      headers: headers
    });

  }

  saveAddress(adrDets: any,token:any): Observable<any> {
    const headers = new HttpHeaders({'Authorization':'Bearer '+token,'Access-Control-Allow-Origin':'*'});
    return this.http.post("http://localhost:8080/address",adrDets,{headers: headers});
  }

  forgotEmail(email: string):Observable<any>{
    this.emails=email;
    return this.http.post("http://localhost:8080/forgotEmail",email);
  }

  
  loginUser(user: any): Observable<any> {
    const headers = new HttpHeaders({ "Access-Control-Allow-Origin": "*" });
    //this.loggedin =
    return this.http.post("http://localhost:8080/login", user, {
      headers: headers
    });
  }


  

  updatePass(user:any):Observable<any>{
   
    return this.http.post("http://localhost:8080/updatePass",user);
  }

  

}