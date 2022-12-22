import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../model/Car';
import { AlertsService } from 'src/app/services/alerts.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient, private alerts: AlertsService) { }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
   };
  serverUrl="http://localhost:5049/api"
  addCar(addedCar: Car): Observable<any>{
    return this.http.post(this.serverUrl+"/car", addedCar, this.httpOptions);



}
}
