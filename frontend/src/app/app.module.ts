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
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-register/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-login/user-register/user-register/user-register.component';
import { UserService } from './services/user.service';
import { AlertsService } from './services/alerts.service';
import { AuthService } from './services/auth.service';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';
import { CarService } from './services/car.service';

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
    UserRegisterComponent,
    FilterPipe,
    SortPipe

   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService,
    UserService,
    AlertsService,
    CarService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
