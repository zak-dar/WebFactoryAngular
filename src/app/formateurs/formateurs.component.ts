import { Component, OnInit } from '@angular/core';
import { MatiereHttpService } from '../matieres/matiere-http.service';
import { Formateur, FormateurMatiereVM, Matiere } from '../model';
import { FormateurHttpService } from './formateur-http.service';

@Component({
  selector: 'formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.scss']
})
export class FormateursComponent implements OnInit {

  formateurForm: Formateur = null;

  constructor(private formateurService: FormateurHttpService, private matiereService : MatiereHttpService) { 
  }

  ngOnInit(): void {
  }

  list(): Array<Formateur> {
    return this.formateurService.findAll();
  }

  add(): void {
    this.formateurForm = new Formateur();
    this.formateurForm.competences = new Array<FormateurMatiereVM>();
  }

  edit(id: number): void {
    this.formateurService.find(id).subscribe(response => {
      this.formateurForm = response;
    }, error => console.log(error));
  }

  remove(id: number): void {
    this.formateurService.delete(id);
  }

}

