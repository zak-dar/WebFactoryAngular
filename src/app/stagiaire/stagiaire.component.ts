import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../model';
import { StagiaireService } from './stagiaire.service';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.scss']
})
export class StagiaireComponent implements OnInit {

  stagiaireForm: Stagiaire = null;

  constructor(private stagiaireService: StagiaireService) { 
  }

  ngOnInit(): void {
  }

  list(): Array<Stagiaire> {
    return this.stagiaireService.findAll();
  }

  add(): void {
    this.stagiaireForm = new Stagiaire();
  }

  edit(id: number): void {
    this.stagiaireForm = {... this.stagiaireService.find(id)};
  }

  remove(id: number): void {
    this.stagiaireService.delete(id);
  }
}
