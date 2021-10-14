import { Injectable } from '@angular/core';
import { MatiereHttpService } from '../matieres/matiere-http.service';
import { MatiereService } from '../matieres/matiere.service';
import { Formateur } from '../model';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  private formateurs: Array<Formateur> = new Array<Formateur>();

  
  constructor() { 
  }

  findAll(): Array<Formateur> {
    return this.formateurs;
  }

  find(id: number): Formateur {
    return this.formateurs.find(f => f.id == id);
  }

  create(matiere: Formateur) : void {
    let max: number = 0;

    for(let form of this.formateurs) {
      if(max < form.id) {
        max = form.id;
      }
    }

    matiere.id = ++max;

    this.formateurs.push(matiere);
  }

  update(formateur: Formateur) : void {
    const position: number = this.formateurs.findIndex(form => form.id == formateur.id);

    this.formateurs[position] = formateur;
  }

  delete(id: number): void {
    const position: number = this.formateurs.findIndex(form => form.id == id);

    this.formateurs.splice(position, 1);
  }




}
