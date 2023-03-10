import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/Car';
import { HousingService } from 'src/app/services/housing.service';
import { IProp } from '../IProp';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  propertyList!: Array<Car> ;
  Type = '';

  constructor(private housingService:HousingService){}
  ngOnInit(): void {
    this.housingService.getAllCars().subscribe(
      data => {
        this.propertyList = data;
      }
    )
  }
  clear() {
  this.Type=''
}
}
