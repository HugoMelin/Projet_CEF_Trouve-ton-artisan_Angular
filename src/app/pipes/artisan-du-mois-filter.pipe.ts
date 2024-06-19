import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artisanDuMoisFilter',
  standalone: true
})
export class ArtisanDuMoisFilterPipe implements PipeTransform {

  transform(items:any[], top:boolean): any[] {
    let resultArray = []
    for (let item of items) {
      if (item.top) {
        resultArray.push(item)
      }
    }
    return resultArray
  }
}
