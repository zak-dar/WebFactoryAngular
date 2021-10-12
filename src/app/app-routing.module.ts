import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditStagiaireComponent } from './edit-stagiaire/edit-stagiaire.component';
import { MatieresComponent } from './matieres/matieres.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';

const routes: Routes = [
  {
    path: "matieres", component: MatieresComponent,
  },
  {
    path: "stagiaire", component: StagiaireComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
