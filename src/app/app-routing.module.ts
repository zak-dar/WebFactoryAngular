import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursussComponent } from './cursuss/cursuss.component';
import { MatieresComponent } from './matieres/matieres.component';

const routes: Routes = [
  {path: "matieres", component: MatieresComponent},
  {path: "cursus", component: CursussComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
