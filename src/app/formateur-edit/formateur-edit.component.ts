import { Component, Input } from '@angular/core';
import { FormateurHttpService } from '../formateurs/formateur-http.service';
import { FormateurService } from '../formateurs/formateur.service';
import { MatiereHttpService } from '../matieres/matiere-http.service';
import { MatiereService } from '../matieres/matiere.service';
import { Formateur, FormateurMatiereVM, Matiere } from '../model';

@Component({
  selector: 'formateur-edit',
  templateUrl: './formateur-edit.component.html',
  styleUrls: ['./formateur-edit.component.scss']
})
export class FormateurEditComponent {

  @Input("formateurForm") formateur: Formateur;
  listCompetences: Array<Matiere>;
  matieres: Array<Matiere>;

  constructor(private formateurService: FormateurHttpService, private matiereService: MatiereHttpService) {
  }
  ngOnChanges(): void {

    this.matieres = new Array<Matiere>();

    let matieresTMP = this.matiereService.findAll();

    for (let mat of matieresTMP) {
      mat.checked = false;
      for (let comp of this.formateur.competences) {
        if (mat.id == comp.matiereId) {
          mat.checked = true;
        }
      }
      this.matieres.push(mat);
    }

    console.log(this.matieres);
  }

  save(): void {

    this.formateur.competences = new Array<FormateurMatiereVM>();
    console.log(this.matieres);

      for (let mat of this.matieres) {
        if (mat.checked == true) {
          let compTMP: FormateurMatiereVM = new FormateurMatiereVM();
          compTMP.matiereId = mat.id;
          compTMP.titre = mat.titre;
          this.formateur.competences.push(compTMP)
        }

    }
    if (this.formateur.id) {
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
