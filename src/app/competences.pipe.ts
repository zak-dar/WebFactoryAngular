import { Pipe, PipeTransform } from '@angular/core';
import { Matiere } from './model';

@Pipe({
  name: 'competences'
})
export class CompetencesPipe implements PipeTransform {

  transform(value: Array<Matiere>): string {
    let chaine : string = "";
    for(let matieres of value){
      chaine += " " + matieres.titre
    }
    return chaine

  }

}
