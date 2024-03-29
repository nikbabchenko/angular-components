import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usSort',
  pure: true
})
export class SortByFieldPipe implements PipeTransform {
  transform(array: any[], field: string): any[] {
    const arr = [...array].sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return arr;
  }
}
