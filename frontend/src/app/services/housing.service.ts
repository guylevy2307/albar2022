import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { IProp } from '../property/IProp';
import { Observable } from 'rxjs';
import { Car } from '../model/Car';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

 constructor(private http:HttpClient) { }

  getAllType(): Observable<string[]>{
    return this.http.get<string[]>('http://localhost:5049/api/carType');
  }
 /* getAllCars(): Observable<IProp[]> {
    return this.http.get('data/propertis.json').pipe(
      map(data =>{
        const propertiesArray: Array<IProp> = [];
        for (const id in data) {
          propertiesArray.push(Object.values(data).at(Number(id)));

        }
        return propertiesArray
      })
   )
 }*/
 getAllCars(): Observable<Car[]>{
  return this.http.get<Car[]>('http://localhost:5049/api/car');
}
}
