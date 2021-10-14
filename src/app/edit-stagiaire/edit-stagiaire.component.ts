import { Component, Input, OnInit } from '@angular/core';
import { Civilite, Stagiaire } from '../model';
import { StagiaireService } from '../stagiaire/stagiaire.service';

@Component({
  selector: 'edit-stagiaire',
  templateUrl: './edit-stagiaire.component.html',
  styleUrls: ['./edit-stagiaire.component.scss']
})
export class EditStagiaireComponent implements OnInit {

  @Input("stagiaire")
  stagiaireForm: Stagiaire = null;

  public civilites = Object.values(Civilite);

  constructor(private stagaireService: StagiaireService) { }

  save(): void {
    if(this.stagiaireForm.id) {
      this.stagaireService.update(this.stagiaireForm);
    } else {
      this.stagaireService.create(this.stagiaireForm);
    } 
    this.cancel();
  }

  cancel(): void {
    this.stagiaireForm = null;
  }

  ngOnInit(): void {
  }

}
