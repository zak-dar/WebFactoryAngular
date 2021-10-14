import { Pipe, PipeTransform } from '@angular/core';
import { Stagiaire } from './model';

@Pipe({
  name: 'affichageStagiairePageCursus'
})
export class AffichageStagiairePageCursusPipe implements PipeTransform {

  transform(value: Array<Stagiaire>): string {
    let chaine : string = "";
    for(let stagiaire of value){
      console.log(stagiaire);
      chaine += " " + stagiaire.nom + "-" + stagiaire.prenom
    }
    return chaine

  }

}
