import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Superhero } from './superhero.model';

@Injectable({
  providedIn: 'root',
})
export class SuperheroService {
  private superherosApiUrl =
    'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';

  constructor(private http: HttpClient) {}

  getAllSuperheros(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(this.superherosApiUrl);
  }

  getOneSuperheroDetails(superheroId: string): Observable<Superhero> {
    return this.http.get<Superhero>(
      `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${superheroId}.json`
    );
  }
}
