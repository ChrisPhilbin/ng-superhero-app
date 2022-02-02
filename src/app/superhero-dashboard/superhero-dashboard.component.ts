import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Superhero } from '../superhero.model';

@Component({
  selector: 'app-superhero-dashboard',
  templateUrl: './superhero-dashboard.component.html',
  styleUrls: ['./superhero-dashboard.component.css'],
})
export class SuperheroDashboardComponent implements OnInit {
  loading: boolean = false;
  heros: Superhero[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    document.title = 'Superhero Dashboard';
    this.getAllSuperheros();
  }

  getAllSuperheros() {
    this.loading = true;
    this.http
      //.get is a generic method, indicate what the response body type is - an array of superhero objects
      .get<Superhero[]>(
        'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json'
      )
      .subscribe((responseHeros) => {
        this.heros = responseHeros;
        this.loading = false;
      });
  }
}
