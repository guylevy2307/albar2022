import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { IProp } from '../property/IProp';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }

  getAllCars(): Observable<IProp[]> {
    return this.http.get('data/propertis.json').pipe(
      map(data =>{
        const propertiesArray: Array<IProp> = [];
        for (const id in data) {
          propertiesArray.push(Object.values(data).at(Number(id)));

        }
        return propertiesArray
      })
   )
}
}
