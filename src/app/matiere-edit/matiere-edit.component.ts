import { Component, Input, OnInit } from '@angular/core';
import { MatiereService } from '../matieres/matiere.service';
import { Matiere } from '../model';

@Component({
  selector: 'matiere-edit , [matiere-edit]',
  templateUrl: './matiere-edit.component.html',
  styleUrls: ['./matiere-edit.component.scss']
})
export class MatiereEditComponent implements OnInit {

  @Input("matiereForm") matiere: Matiere ;
  

  constructor(private matiereService: MatiereService) { 
  }

  ngOnInit(): void {
  }

  save(): void {
    if(this.matiere.Id) {
      this.matiereService.update(this.matiere);
    } else {
      this.matiereService.create(this.matiere);
    } 
      this.cancel();
  }

  cancel(): void {
    this.matiere = null;
  }

}
