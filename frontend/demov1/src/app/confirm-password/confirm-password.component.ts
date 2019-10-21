import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {User} from '../user';
@Component({
  selector: 'confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
export class ConfirmPasswordComponent implements OnInit {
cpassword:string;
matchStatus='';
user:User;
  constructor(private userService: UserService) { }
onSubmit(){
  if (this.cpassword==this.user.password)
  {
    
    
    this.user.email=this.userService.getData();
    this.userService.updatePass(this.user).subscribe();
  }
    else
    this.matchStatus='password and confirmed password should be matched';
}
  ngOnInit() {
  }

}
