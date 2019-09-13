import { Component, OnInit } from '@angular/core';
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
  constructor(private userService: UserService,private router: Router) {
    this.user =new User();
   }

  public message:any={};
  lengthCount:boolean=false;
  
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

