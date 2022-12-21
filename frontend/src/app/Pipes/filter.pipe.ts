import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../model/Car';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cars: Car[], filterString: string, propType: string): any[] {
    const resultArray = [];
    var bool = 1
    if (cars === undefined) {
      bool=0
    }
    if(bool||filterString===''||propType==='' )
    {
      return cars;
    }
    for (const car of cars) {
      if (car.type.toLowerCase().startsWith(filterString.toLowerCase()) ) {
        resultArray.push(car);

      }
    }
    return resultArray;
  }

}
