import { Injectable } from '@angular/core';
import { MatiereService } from '../matieres/matiere.service';
import { Formateur } from '../model';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  private formateurs: Array<Formateur> = new Array<Formateur>();
  matiereService : MatiereService = new MatiereService;

  constructor() { 
    this.load();
  }

  findAll(): Array<Formateur> {
    return this.formateurs;
  }

  find(id: number): Formateur {
    return this.formateurs.find(f => f.Id == id);
  }

  create(matiere: Formateur) : void {
    let max: number = 0;

    for(let form of this.formateurs) {
      if(max < form.Id) {
        max = form.Id;
      }
    }

    matiere.Id = ++max;

    this.formateurs.push(matiere);
  }

  update(formateur: Formateur) : void {
    const position: number = this.formateurs.findIndex(form => form.Id == formateur.Id);

    this.formateurs[position] = formateur;
  }

  delete(id: number): void {
    const position: number = this.formateurs.findIndex(form => form.Id == id);

    this.formateurs.splice(position, 1);
  }



  private load(): void {

    this.formateurs.push(new Formateur(1, false, this.matiereService.findAll()));
    this.formateurs.push(new Formateur(2, true, this.matiereService.findAll()));
    this.formateurs.push(new Formateur(3, true, this.matiereService.findAll()));
  }
}
