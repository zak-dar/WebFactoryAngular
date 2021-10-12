import { Component, Input, OnInit } from '@angular/core';
import { Cursus, Stagiaire } from '../model';
import { StagiaireService } from '../stagiaire/stagiaire.service';
import { CursusService } from './cursus.service';


@Component({
  selector: 'app-cursuss',
  templateUrl: './cursuss.component.html',
  styleUrls: ['./cursuss.component.scss']
})
export class CursussComponent implements OnInit {

  
  @Input("formateurForm") CursusForm: Cursus;
  listStagiaires: Array<Stagiaire>;

  ngOnChanges(): void {
    if (this.CursusForm) {
      this.listStagiaires = this.stagiaireService.findAll();

      for (let c of this.listStagiaires) {
        c.Checked = (this.CursusForm.Stagiaires.find(m => m.Id == c.Id) != null)
      }
    } else {
      this.listStagiaires = this.stagiaireService.findAll();
    }
  }

  constructor(private CursusService: CursusService, private stagiaireService:StagiaireService) { 
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
    this.CursusForm.Stagiaires = new Array<Stagiaire>();
    for (let stagiaire of this.listStagiaires) {
      if (stagiaire.Checked == true) {
        this.CursusForm.Stagiaires.push(stagiaire)
      }
    }
    if (this.CursusForm.Id) {
      this.CursusService.update(this.CursusForm);
    } else {

      this.CursusService.create(this.CursusForm);
    }
    this.cancel();
  }

  cancel(): void {
    this.CursusForm = null;
  }
}
