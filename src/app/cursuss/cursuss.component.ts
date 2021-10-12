import { Component, OnInit } from '@angular/core';
import { Cursus, Stagiaire } from '../model';
import { CursusService } from './cursus.service';

@Component({
  selector: 'app-cursuss',
  templateUrl: './cursuss.component.html',
  styleUrls: ['./cursuss.component.scss']
})
export class CursussComponent implements OnInit {

  CursusForm: Cursus = null;

  constructor(private CursusService: CursusService) { 
  }

  ngOnInit(): void {
  }

  list(): Array<Cursus> {
    return this.CursusService.findAll();
  }

  add(): void {
    this.CursusForm = new Cursus();
    this.CursusForm.Stagiaires = new Array<Stagiaire>();
  }

  edit(id: number): void {
    this.CursusForm = {... this.CursusService.find(id)};
  }

  remove(id: number): void {
    this.CursusService.delete(id);
  }

  save(): void {
    if(this.CursusForm.Id) {
      this.CursusService.update(this.CursusForm);
    } else {
      this.CursusService.create(this.CursusForm);
    } 
  }

  cancel(): void {
    this.CursusForm = null;
  }
}
