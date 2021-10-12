import { Component, Input } from '@angular/core';
import { FormateurService } from '../formateurs/formateur.service';
import { MatiereService } from '../matieres/matiere.service';
import { Formateur, Matiere } from '../model';

@Component({
  selector: 'formateur-edit',
  templateUrl: './formateur-edit.component.html',
  styleUrls: ['./formateur-edit.component.scss']
})
export class FormateurEditComponent {

  @Input("formateurForm") formateur: Formateur;
  listCompetences: Array<Matiere>;



  constructor(private formateurService: FormateurService, private matiereService: MatiereService) {
  }

  ngOnChanges(): void {
    console.log(this.formateur)
    if (this.formateur) {
      this.listCompetences = this.matiereService.findAll();
      
      for (let c of this.listCompetences) {
        c.Checked = (this.formateur.Competences.find(m => m.Id == c.Id) != null)
      }
    } else {
      this.listCompetences = this.matiereService.findAll();
    }
  }

  save(): void {
    console.log(this.listCompetences);
    // if (this.formateur.Id) {
    //   this.formateurService.update(this.formateur);
    // } else {
    //   this.formateurService.create(this.formateur);
    // }
    // this.cancel();
  }

  cancel(): void {
    this.formateur = null;
  }

  // getCompetences(): Array<Matiere> {
  //   if (this.formateur) {
  //     for(let comp of this.formateur.Competences){
  //       let i = 0;
  //       if(this.matiereService.find(i).Id )
  //     }
  //     return this.formateur.Competences
  //   } else {
  //     return this.matiereService.findAll()
  //   }
  // }


}
