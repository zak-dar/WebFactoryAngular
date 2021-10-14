import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stagiaire } from '../model';

@Injectable({
  providedIn: 'root'
})
export class StagiaireHttpService {

  private stagiaires: Array<Stagiaire> = new Array<Stagiaire>();
  

  constructor(private http: HttpClient) { 
    this.load();
    
  }

  findAll(): Array<Stagiaire> {
    return this.stagiaires;
  }


  find(id: number): Observable<Stagiaire> {
    return this.http.get<Stagiaire>("http://localhost:5000/api/Stagiaire/"+id);
  }

  create(stagiaire: Stagiaire) : void {
    this.http.post<Stagiaire>("http://localhost:5000/api/Stagiaire", stagiaire).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  update(stagiaire: Stagiaire) : void {
    this.http.put<Stagiaire>("http://localhost:5000/api/Stagiaire/"+stagiaire.id, stagiaire).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  delete(id: number): void {
    this.http.delete<void>("http://localhost:5000/api/Stagiaire/"+id).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  private load(): void {
    this.http.get<Array<Stagiaire>>("http://localhost:5000/api/Stagiaire").subscribe(response => {
      this.stagiaires = response;
    }, error => console.log(error));
  }

}