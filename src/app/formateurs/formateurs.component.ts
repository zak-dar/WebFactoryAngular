import { Component, OnInit } from '@angular/core';
import { Formateur } from '../model';
import { FormateurService } from './formateur.service';

@Component({
  selector: 'formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.scss']
})
export class FormateursComponent implements OnInit {

  formateurForm: Formateur = null;

  constructor(private formateurService: FormateurService) { 
  }

  ngOnInit(): void {
  }

  list(): Array<Formateur> {
    return this.formateurService.findAll();
  }

  add(): void {
    this.formateurForm = new Formateur();
  }

  edit(id: number): void {
    this.formateurForm = {... this.formateurService.find(id)};
  }

  remove(id: number): void {
    this.formateurService.delete(id);
  }

}
