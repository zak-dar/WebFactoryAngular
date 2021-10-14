import { Injectable } from '@angular/core';
import { Matiere } from '../model';
import { FormateurService } from '../formateurs/formateur.service';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  private matieres: Array<Matiere> = new Array<Matiere>();

  constructor(private formateurService: FormateurService) { 
    this.load();
  }

  findAll(): Array<Matiere> {
    return this.matieres;
  }

  find(id: number): Matiere {
    return this.matieres.find(m => m.id == id);
  }

  create(matiere: Matiere) : void {
    let max: number = 0;

    for(let mat of this.matieres) {
      if(max < mat.id) {
        max = mat.id;
      }
    }

    matiere.id = ++max;

    this.matieres.push(matiere);
  }

  update(matiere: Matiere) : void {
    const position: number = this.matieres.findIndex(m => m.id == matiere.id);

    this.matieres[position] = matiere;
  }

  delete(id: number): void {
    const position: number = this.matieres.findIndex(m => m.id == id);

    this.matieres.splice(position, 1);
  }



  private load(): void {
    this.matieres.push(new Matiere(1, "HTML/CSS", 2, "Apprendre le HTML", "Aucun", "HTML5 et CSS3"));
    this.matieres.push(new Matiere(3, "JAVASCRIPT", 3, "Fondamentaux du langage Javascript", "HTML", "Javascript ES6"));
    this.matieres.push(new Matiere(6, "ANGULAR", 5, "Introduction à angular", "HTML5,CSS3 et Javascript", "Les bases d'Angular"));

    this.matieres[0].formateurs.push(this.formateurService.find(1));
    this.matieres[0].formateurs.push(this.formateurService.find(3));
    this.matieres[0].formateurs.push(this.formateurService.find(4));

    this.matieres[1].formateurs.push(this.formateurService.find(1));
    this.matieres[1].formateurs.push(this.formateurService.find(3));

    this.matieres[2].formateurs.push(this.formateurService.find(3));
    this.matieres[2].formateurs.push(this.formateurService.find(4));
  }
}
