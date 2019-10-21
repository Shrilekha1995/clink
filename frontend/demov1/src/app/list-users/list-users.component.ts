import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  public loginUser:any;
  public message: string='';
  public users:any=[];
  constructor(private userService : UserService)
  {
  
  }



  ngOnInit() {
    this.userService.getUsers().subscribe(
      data =>{
        this.users=data;
      },err =>{
        console.log(err);
      }
    )
    //console.log(this.loggedinUser);
   // let user=JSON.parse(this.loggedinUser);
   // console.log(user.user.role);
   //// let role=user.user.role;
    //if(role=='ADMIN'){
    //  this.adminChk=true;
    //}else{
    //  this.userChk=true;
    //}
  }

}
