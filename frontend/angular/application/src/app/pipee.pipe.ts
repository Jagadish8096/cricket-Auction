import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipee'
})
export class PipeePipe implements PipeTransform {

  transform(value: any, searchTerm: any):any {
    return value.filter(function(search: any){
      return search.name.indexof(searchTerm)>-1

    });
  }

}
