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
    this.formateur.Competences = new Array<Matiere>();
    for (let competence of this.listCompetences) {
      if (competence.Checked == true) {
        this.formateur.Competences.push(competence)
      }
    }
    if (this.formateur.Id) {
      this.formateurService.update(this.formateur);
    } else {

      this.formateurService.create(this.formateur);
    }
    this.cancel();
  }

  cancel(): void {
    this.formateur = null;
  }

}
