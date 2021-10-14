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
    return this.stagiaires.find(m => m.id == id);
  }

  create(stagiaire: Stagiaire) : void {
    let max: number = 0;

    for(let mat of this.stagiaires) {
      if(max < mat.id) {
        max = mat.id;
      }
    }

    stagiaire.id = ++max;

    this.stagiaires.push(stagiaire);
  }

  update(stagiaire: Stagiaire) : void {
    const position: number = this.stagiaires.findIndex(m => m.id == stagiaire.id);

    this.stagiaires[position] = stagiaire;
  }

  delete(id: number): void {
    const position: number = this.stagiaires.findIndex(m => m.id == id);

    this.stagiaires.splice(position, 1);
  }



  private load(): void {
    this.stagiaires.push(new Stagiaire(1, Civilite.M, "Dupont", "Samuel", "s.dupont@toto.fr", "0620202020", "1950-08-07"));
    this.stagiaires.push(new Stagiaire(2, Civilite.MLLE, "Martial", "Héleine", "h.martial@toto.fr", "0620202020", "1970-08-07"));
    this.stagiaires.push(new Stagiaire(3, Civilite.MME, "Merkel", "Angela", "a.merkel@toto.fr", "0620202020", "1980-08-07"));
  }
}
