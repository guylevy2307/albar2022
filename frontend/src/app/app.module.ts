import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PropertyCarComponent } from './property/property-car/property-car.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddCarComponent } from './property/add-car/add-car.component';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-register/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-login/user-register/user-register/user-register.component';

const appRoutes: Routes = [
  {
    path:'add-car',component:AddCarComponent
  },
  {
    path:'',component:PropertyListComponent
  },
  {
    path:'user/login',component:UserLoginComponent
  },
  {
    path:'user/register',component:UserRegisterComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    PropertyCarComponent,
    PropertyListComponent,
    NavBarComponent,
    AddCarComponent,
    UserLoginComponent,
    UserRegisterComponent

   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
