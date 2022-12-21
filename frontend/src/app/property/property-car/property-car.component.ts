import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/model/Car';

@Component({
  selector: 'app-property-car',
  templateUrl: './property-car.component.html',
  styleUrls: ['./property-car.component.css']
})
export class PropertyCarComponent  {
  @Input()
  property!: Car;


}
