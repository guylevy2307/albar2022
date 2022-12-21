import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propType: string): any[] {
    const resultArray = [];
    var temp = 1;
    if (value)
    {temp=0
      }
    if(temp||filterString===''||propType==='' )
    {
      return value;
    }
    for (const item of value) {
      if (item[propType].toLowerCase().startsWith(filterString.toLowerCase()) ) {
        resultArray.push(item);

      }
    }
    return resultArray;
  }

}
