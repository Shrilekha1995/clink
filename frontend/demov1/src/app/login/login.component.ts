import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {User} from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:any= {};
  result1:boolean;
  OTP:number;
  userOTP:number;
  OTPstatus='';
  @Input() status:boolean;
  ishidden:boolean=true;
  otpwindow:boolean=true;
  constructor(private userService: UserService,private router: Router) {
    this.user =new User();
   }

  public message:any={};
  lengthCount:boolean=false;

  onForgot(){
    this.ishidden=false;

      
  }

  set data(value: string) { 
    this.userService.emails = value; 
  } 

  get data():string { 
    return this.userService.emails; 
  } 
  onConfirmOTP(){
    if(this.OTP==this.userOTP)
    {
      
    this.router.navigate(["confirm-password"])
    }
    else
    this.OTPstatus='Incorrect OTP.'
  }
  onEmail(email:string){
    this.otpwindow=false;
    this.userService.setData(email);
    this.userService.forgotEmail(email).subscribe(
      data=>{
        console.log(data.constructor)
        this.OTP=data
      }
    );
  }
  
onLogin(){
  console.log(this.user)
this.userService.loginUser(this.user).subscribe(
  data=>{
     console.log(data.constructor)
    this.result1=data
    if(this.result1==true)
    {
      console.log(data)
      this.router.navigate(["list"])
    }  
      else
      {
        console.log("2222")

        this.router.navigate(["login"])
      }
  },
  err=>{
    console.log("error")
  }
);

}

  ngOnInit() {
  }

    
  }

