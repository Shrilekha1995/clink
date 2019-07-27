import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public loggedin: any = {};
  constructor(private http: HttpClient) {
    this.http = http;
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

  
  loginUser(user: any): Observable<any> {
    const headers = new HttpHeaders({ "Access-Control-Allow-Origin": "*" });
    //this.loggedin =
    return this.http.post("http://localhost:8080/login", user, {
      headers: headers
    });
  //  console.log(this.loggedin.token);
   // return this.loggedin;
  }

}
