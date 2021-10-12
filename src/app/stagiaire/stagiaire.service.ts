import { Injectable } from '@angular/core';
import { Civilite, Stagiaire } from '../model';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  private stagiaires: Array<Stagiaire> = new Array<Stagiaire>();

  constructor() {
    this.load();
   }

   findAll(): Array<Stagiaire> {
    return this.stagiaires;
  }

  find(id: number): Stagiaire {
    return this.stagiaires.find(m => m.Id == id);
  }

  create(stagiaire: Stagiaire) : void {
    let max: number = 0;

    for(let mat of this.stagiaires) {
      if(max < mat.Id) {
        max = mat.Id;
      }
    }

    stagiaire.Id = ++max;

    this.stagiaires.push(stagiaire);
  }

  update(stagiaire: Stagiaire) : void {
    const position: number = this.stagiaires.findIndex(m => m.Id == stagiaire.Id);

    this.stagiaires[position] = stagiaire;
  }

  delete(id: number): void {
    const position: number = this.stagiaires.findIndex(m => m.Id == id);

    this.stagiaires.splice(position, 1);
  }



  private load(): void {
    this.stagiaires.push(new Stagiaire(1, Civilite.M, "Dupont", "Samuel", "s.dupont@toto.fr", "0620202020", new Date("1950-08-07")));
    this.stagiaires.push(new Stagiaire(2, Civilite.MLLE, "Martial", "Héleine", "h.martial@toto.fr", "0620202020", new Date("1970-08-07")));
    this.stagiaires.push(new Stagiaire(3, Civilite.MME, "Merkel", "Angela", "a.merkel@toto.fr", "0620202020", new Date("1980-08-07")));
  }
}
