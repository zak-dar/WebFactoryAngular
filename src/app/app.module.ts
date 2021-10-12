import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatieresComponent } from './matieres/matieres.component';
import { MatiereService } from './matieres/matiere.service';
import { FormsModule } from '@angular/forms';
import { MatiereEditComponent } from './matiere-edit/matiere-edit.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { CursussComponent } from './cursuss/cursuss.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { EditStagiaireComponent } from './edit-stagiaire/edit-stagiaire.component';
import { StagiaireService } from './stagiaire/stagiaire.service';

@NgModule({
  declarations: [
    AppComponent,
    MatieresComponent,
    MatiereEditComponent,
    FormateursComponent,
    CursussComponent,
    StagiaireComponent,
    EditStagiaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MatiereService,
    StagiaireService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
