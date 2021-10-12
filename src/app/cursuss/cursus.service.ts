import { Injectable } from '@angular/core';
import { Cursus } from '../model';

@Injectable({
  providedIn: 'root'
})
export class CursusService {

 

  private Cursuss: Array<Cursus> = new Array<Cursus>();

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
    this.Cursuss.push(new Cursus(1, "HTML/CSS",new Date(1-1-2021),new Date(1-4-2021)));
    this.Cursuss.push(new Cursus(2, "C#",new Date(1-4-2021),new Date(1-6-2021)));
    this.Cursuss.push(new Cursus(3, "Angular",new Date(1-7-2021),new Date(1-12-2021)));
  }
}