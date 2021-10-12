import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursussComponent } from './cursuss/cursuss.component';
import { MatieresComponent } from './matieres/matieres.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';

const routes: Routes = [
  {path: "matieres", component: MatieresComponent},
  {path: "cursus", component: CursussComponent},
  {path: "stagiaire", component: StagiaireComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
