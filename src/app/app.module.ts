import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatieresComponent } from './matieres/matieres.component';
import { MatiereService } from './matieres/matiere.service';
import { FormsModule } from '@angular/forms';
import { MatiereEditComponent } from './matiere-edit/matiere-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MatieresComponent,
    MatiereEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MatiereService],
  bootstrap: [AppComponent]
})
export class AppModule { }
