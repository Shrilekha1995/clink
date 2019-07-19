import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {SignupComponent} from './signup/signup.component';
import { FormsModule }   from '@angular/forms';
import {LoginComponent} from './login/login.component';
import { AboutComponent } from './about/about.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ListUsersComponent } from './list-users/list-users.component';


const routes: Routes = [

  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path:"about",
    component: AboutComponent
  },
  {
  path:"list",
  component: ListUsersComponent
},
{
  path:"home",
  component: HomeComponent
}
];


@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,
    ListUsersComponent
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule 

    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
