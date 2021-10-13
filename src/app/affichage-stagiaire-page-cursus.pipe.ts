import { Pipe, PipeTransform } from '@angular/core';
import { Stagiaire } from './model';

@Pipe({
  name: 'affichageStagiairePageCursus'
})
export class AffichageStagiairePageCursusPipe implements PipeTransform {

  transform(value: Array<Stagiaire>): string {
    let chaine : string = "";
    for(let matieres of value){
      chaine += " " + matieres.Nom + "-" + matieres.Prenom
    }
    return chaine

  }

}
