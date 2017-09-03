import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gridfilter'
})
export class GridfilterPipe implements PipeTransform {

  transform(items: any[], filtertext?: string): any {
    filtertext=filtertext.toLowerCase();
    if (!items || !filtertext) {
      return items;
    }
    var properties = Object.getOwnPropertyNames(items[0]);
    return items.filter(item => {

      var result = false;
      properties.forEach(element => 
      {
        if (item[element].toLowerCase().indexOf(filtertext) !== -1) 
        {
          result = true;
         return
        }
       
      }
        )
      
      return result;
    });
  }

}
