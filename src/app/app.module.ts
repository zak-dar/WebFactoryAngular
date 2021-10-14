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
import { ExternePipe } from './externe.pipe';
import { FormateurService } from './formateurs/formateur.service';
import { CompetencesPipe } from './competences.pipe';
import { FormateurEditComponent } from './formateur-edit/formateur-edit.component';
import {HttpClientModule} from "@angular/common/http";
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { EditStagiaireComponent } from './edit-stagiaire/edit-stagiaire.component';
import { StagiaireService } from './stagiaire/stagiaire.service';
import { AffichageStagiairePageCursusPipe } from './affichage-stagiaire-page-cursus.pipe';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MatieresComponent,
    MatiereEditComponent,
    FormateursComponent,
    CursussComponent,
    ExternePipe,
    CompetencesPipe,
    FormateurEditComponent,
    StagiaireComponent,
    EditStagiaireComponent,
    AffichageStagiairePageCursusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FormateurService,
    MatiereService,
    StagiaireService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
