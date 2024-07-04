import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(items:any [], searchTerm:string):any[] {
    if (!searchTerm) {
      return items
    }
    let resultArray = []
    searchTerm = searchTerm.toLowerCase()
    for (let item of items) {
      if (item.name.toLowerCase().includes(searchTerm)
        || item.location.toLowerCase().includes(searchTerm)
        || item.specialty.toLowerCase().includes(searchTerm)) {
        resultArray.push(item)
      }
    }
    return resultArray
  }

}
