import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormsModule, FormGroup,FormBuilder,FormControl,Validators}   from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-sign up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

  public loginUser:any;
  public message: string='';
  public users:any=[];
  public user :any={};
  public userFile:any= File;
  

  constructor(private userService : UserService)
  {
  
  }
  public adminChk:boolean=false;
  public userChk:boolean=false;
  public loggedinUser:any=localStorage.getItem('currentUser');
 



  saveUser(user:any,userForm:any){


    this.userService.saveUser(user,userForm).subscribe(

     
      data =>{
        this.users.push(data);
        this.user= {};
      },err =>{
        console.log(err);
      }
       

    )
  }



  onSelectFile(event){
    const file= event.target.files;
    this.userFile=file;

  }

}