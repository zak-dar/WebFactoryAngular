import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formateur } from '../model';

@Injectable({
  providedIn: 'root'
})
export class FormateurHttpService {

  private formateurs: Array<Formateur> = new Array<Formateur>();

  constructor(private http: HttpClient) { 
    this.load();
  }

  findAll(): Array<Formateur> {
    return this.formateurs;
  }

  find(id: number): Observable<Formateur> {
    return this.http.get<Formateur>("http://localhost:5000/api/Formateur/"+id);
  }

  create(formateur: Formateur) : void {
    this.http.post<Formateur>("http://localhost:5000/api/Formateur", formateur).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  update(formateur: Formateur) : void {
    this.http.put<Formateur>("http://localhost:5000/api/Formateur/"+formateur.id, formateur).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  delete(id: number): void {
    this.http.delete<void>("http://localhost:5000/api/Formateur/"+id).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  private load(): void {
    this.http.get<Array<Formateur>>("http://localhost:5000/api/Formateur").subscribe(response => {
      this.formateurs = response;
    }, error => console.log(error));
  }
}
