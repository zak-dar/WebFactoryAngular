import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cursus, Stagiaire } from '../model';
import { StagiaireHttpService } from '../stagiaire/stagiaire-http.service';
import { StagiaireService } from '../stagiaire/stagiaire.service';

@Injectable({
  providedIn: 'root'
})
export class CursusHttpService {

  private cursuss: Array<Cursus> = new Array<Cursus>();

  //stagiaireService: StagiaireService = new StagiaireService;
  

  constructor(private http: HttpClient) { 
    this.load();
  }

  findAll(): Array<Cursus> {
    return this.cursuss;
  }


  find(id: number): Observable<Cursus> {
    return this.http.get<Cursus>("http://localhost:5000/api/Cursus/"+id);
  }

  create(cursus: Cursus) : void {
    this.http.post<Cursus>("http://localhost:5000/api/Cursus", cursus).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  update(cursus: Cursus) : void {
    this.http.put<Cursus>("http://localhost:5000/api/Cursus/"+cursus.id, cursus).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  delete(id: number): void {
    this.http.delete<void>("http://localhost:5000/api/Cursus/"+id).subscribe(response => {
      this.load();
    }, error => console.log(error));
  }

  private load(): void {
    this.http.get<Array<Cursus>>("http://localhost:5000/api/Cursus").subscribe(response => {
      this.cursuss = response;
    }, error => console.log(error));
  }

}