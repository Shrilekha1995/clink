import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {UploadFileService} from './upload-file.service';
import { Routes, RouterModule } from '@angular/router';
import {ListUploadComponent} from './list-upload/list-upload.component';
import {FormUploadComponent} from './form-upload/form-upload.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {SignupComponent} from './signup/signup.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import {LoginComponent} from './login/login.component';
import { AboutComponent } from './about/about.component';
import {DetailsUploadComponent} from './details-upload/details-upload.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ListUsersComponent } from './list-users/list-users.component';
import { CarsComponent } from './cars/cars.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ConfirmPasswordComponent } from "src/app/confirm-password/confirm-password.component";
import { AddProductComponent } from './add-product/add-product.component';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthenticationService } from "src/app/services/authentication.service";








const routes: Routes = [
 {
   path:"contact",
   component:ContactComponent
 },

 {
   path:"confirm-password",
   component:ConfirmPasswordComponent
 },

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
,

{
  path:"cars",
  component:CarsComponent
},
{
  path:"products",
  component:ProductDetailsComponent
},
{
  path:"app-add-product",
  component:AddProductComponent
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
    ListUsersComponent,
    ListUploadComponent,
    FormUploadComponent,
    DetailsUploadComponent,
    CarsComponent,
    ContactComponent,
    ProductDetailsComponent,
    ProductItemComponent,

ConfirmPasswordComponent,

AddProductComponent,



   
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule ,
    ReactiveFormsModule,


    
  ],

  providers: [UserService,UploadFileService ],
  bootstrap: [AppComponent]
})
export class AppModule { }