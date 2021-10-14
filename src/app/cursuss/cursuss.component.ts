import { Component, Input, OnInit } from '@angular/core';
import { Cursus, Stagiaire } from '../model';
import { StagiaireHttpService } from '../stagiaire/stagiaire-http.service';
import { StagiaireService } from '../stagiaire/stagiaire.service';
import { CursusHttpService } from './cursus-http.service';
import { CursusService } from './cursus.service';


@Component({
  selector: 'app-cursuss',
  templateUrl: './cursuss.component.html',
  styleUrls: ['./cursuss.component.scss']
})
export class CursussComponent implements OnInit {

  CursusForm: Cursus = null;

  listStagiaires: Array<Stagiaire>;

  constructor(private CursusService: CursusHttpService, private stagiaireService: StagiaireHttpService) {
  }

  
   chargement(): void {
    if (this.CursusForm) {
      this.listStagiaires = this.stagiaireService.findAll();
      for (let c of this.listStagiaires) {
        c.checked = (this.CursusForm.stagiaires.find(m => m.id == c.id) != null) // recupere les stagiaires du cursus checkés et les enregistre
      }
      console.log(this.listStagiaires);
    } else {
      this.listStagiaires = this.stagiaireService.findAll();
    }
  }
  
  

  
  ngOnInit(): void {
  }

  list(): Array<Cursus> {
    return this.CursusService.findAll();
  }

  add(): void {
    this.CursusForm = new Cursus();
    this.CursusForm.stagiaires = new Array<Stagiaire>();
    this.chargement();
  }
  remove(id: number): void {
    this.CursusService.delete(id);
  }

  save(): void {
    this.CursusForm.stagiaires = new Array<Stagiaire>();
    for (let stagiaire of this.listStagiaires) {
      if (stagiaire.checked == true) {
        this.CursusForm.stagiaires.push(stagiaire)
      }
    }
    if (this.CursusForm.id) {
      this.CursusService.update(this.CursusForm);
    } else {

      this.CursusService.create(this.CursusForm);
    }
    this.cancel();
  }

  cancel(): void {
    this.CursusForm = null;
  }

  edit(id: number): void {
    this.CursusService.find(id).subscribe(response => {
      this.CursusForm = response;
    }, error => console.log(error));
    this.chargement();
  }
  //this.CursusForm = { ... this.CursusService.find(id) }; // recupere le cursus qu'on veut modifier
  //this.chargement();
}

