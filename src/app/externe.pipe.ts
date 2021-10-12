import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'externe'
})
export class ExternePipe implements PipeTransform {

  transform(value: boolean): string {
    if(value == true) {
      return "Externe";
    } else {
      return "Interne";
    }
  }

}
