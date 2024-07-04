import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter',
  standalone: true
})
export class CategoryFilterPipe implements PipeTransform {

  transform(items:any[], cat:string): any[] {
    cat=cat.toLowerCase()
    return items.filter(items => items.category.toLowerCase().includes(cat))
  }

}
