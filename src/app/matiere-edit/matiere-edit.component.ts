import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatiereHttpService } from '../matieres/matiere-http.service';
import { MatiereService } from '../matieres/matiere.service';
import { Formateur, Matiere } from '../model';
import { FormateurService } from '../formateurs/formateur.service';

@Component({
  selector: 'matiere-edit',
  templateUrl: './matiere-edit.component.html',
  styleUrls: ['./matiere-edit.component.scss']
})
export class MatiereEditComponent implements OnInit {

  @Input()
  matiere : Matiere = null;

  @Output() deleteRequest = new EventEmitter<number>();

  @Output() cancelRequest = new EventEmitter<void>();

  constructor(private matiereService: MatiereHttpService) { }

  ngOnInit(): void {
  }

  listFormateurs(): Array<Formateur> {
    return this.matiereService.findAllFormateur();
  }

  save(): void {
    if (this.matiere.id) {
      this.matiereService.update(this.matiere);
    } else {
      this.matiereService.create(this.matiere);
    }
    this.cancel();
  }

  remove(): void {
    this.deleteRequest.emit(this.matiere.id);
    this.cancel();
  }

  cancel(): void {
    this.cancelRequest.emit();
    this.matiere = null;
  }

}
