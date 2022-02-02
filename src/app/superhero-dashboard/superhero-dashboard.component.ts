import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Superhero } from '../superhero.model';
import { SuperheroService } from '../superhero.service';

@Component({
  selector: 'app-superhero-dashboard',
  templateUrl: './superhero-dashboard.component.html',
  styleUrls: ['./superhero-dashboard.component.css'],
})
export class SuperheroDashboardComponent implements OnInit {
  loading: boolean = false;
  heros: Superhero[] = [];
  error = null;

  constructor(
    private http: HttpClient,
    private superheroService: SuperheroService
  ) {}

  ngOnInit(): void {
    document.title = 'Superhero Dashboard';
    this.loading = true;
    this.superheroService.getAllSuperheros().subscribe(
      (response) => {
        //first argument to subscribe is a function that is trigged when successful - 2nd argument is a function that is triggered
        //when the request is not successful
        this.loading = false;
        this.heros = response;
      },
      (error) => {
        this.error = error.message;
        console.log('Something went wrong: ', error.message);
      }
    );
  }
}
