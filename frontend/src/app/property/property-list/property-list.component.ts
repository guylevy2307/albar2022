import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  propertyList: any;

  constructor(private housingService:HousingService){}
  ngOnInit(): void {
    this.housingService.getAllCars().subscribe(
      data => {
        this.propertyList = data;
        console.log(data)
      }
    )
  }

}
