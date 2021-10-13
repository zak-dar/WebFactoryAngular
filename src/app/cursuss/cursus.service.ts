import { Injectable } from '@angular/core';
import { Cursus, Stagiaire } from '../model';
import { StagiaireService } from '../stagiaire/stagiaire.service';

@Injectable({
  providedIn: 'root'
})
export class CursusService {

  private Cursuss: Array<Cursus> = new Array<Cursus>();
  stagiaireService: StagiaireService = new StagiaireService;

  

  constructor() { 
    this.load();
  }

  findAll(): Array<Cursus> {
    return this.Cursuss;
  }

  find(id: number): Cursus {
    return this.Cursuss.find(m => m.Id == id);
  }

  create(Cursus: Cursus) : void {
    let max: number = 0;

    for(let mat of this.Cursuss) {
      if(max < mat.Id) {
        max = mat.Id;
      }
    }

    Cursus.Id = ++max;

    this.Cursuss.push(Cursus);
  }

  update(Cursus: Cursus) : void {
    const position: number = this.Cursuss.findIndex(m => m.Id == Cursus.Id);

    this.Cursuss[position] = Cursus;
  }

  delete(id: number): void {
    const position: number = this.Cursuss.findIndex(m => m.Id == id);
    this.Cursuss.splice(position, 1);
  }


  private load(): void {
    this.Cursuss.push(new Cursus(1, "HTML/CSS","2021-01-01","2021-04-01",this.stagiaireService.findAll()));
    this.Cursuss.push(new Cursus(2, "C#","2021-01-01","2021-06-01",this.stagiaireService.findAll()));
    this.Cursuss.push(new Cursus(3, "Angular","2021-01-01","2021-12-01",this.stagiaireService.findAll()));
  }
}