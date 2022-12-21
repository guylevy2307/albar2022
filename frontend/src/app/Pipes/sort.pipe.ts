import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string>, args: any): any {

    const sortField = args[0];
    const sortDirection = args[1];
    var multipal = 1;
    if (sortDirection==='down') {
      multipal = -1;
    }
    if (value) {


      value.sort((a: any, b: any) => {
        if (a[sortField] < b[sortField]) {
          return -1 * multipal;
        }
        else if (a[sortField] > b[sortField]) { return 1 * multipal; }
        else {
          return 0;
        }

      });
  }
    return value;
  }

}
