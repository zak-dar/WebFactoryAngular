import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormateursComponent } from './formateurs/formateurs.component';
import { MatieresComponent } from './matieres/matieres.component';

const routes: Routes = [
  {path: "matieres", component: MatieresComponent},
  {path: "formateurs", component : FormateursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
