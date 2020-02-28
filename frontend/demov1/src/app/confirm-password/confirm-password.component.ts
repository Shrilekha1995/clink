import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
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
  constructor(private userService: UserService) { this.user=new User()}
onSubmit(user:User){

  if (this.cpassword==user.password)
  {
    console.log(this.cpassword);
    
    user.email=this.userService.getData();
    console.log()
    this.userService.updatePass(user).subscribe();
  }
    else
    this.matchStatus='password and confirmed password should be matched';
}
  ngOnInit() {
  }

}
