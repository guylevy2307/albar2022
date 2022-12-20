import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }
  getAllCars() {
   return this.http.get('data/propertis.json')
}
}
