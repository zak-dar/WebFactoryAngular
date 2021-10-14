import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../model';
import { StagiaireHttpService } from './stagiaire-http.service';
import { StagiaireService } from './stagiaire.service';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.scss']
})
export class StagiaireComponent implements OnInit {

  stagiaireForm: Stagiaire = null;

  constructor(private stagiaireService: StagiaireHttpService) { 
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
    this.stagiaireService.find(id).subscribe(response => {
      this.stagiaireForm = response;
    }, error => console.log(error));
  }

  remove(id: number): void {
    this.stagiaireService.delete(id);
  }
}
