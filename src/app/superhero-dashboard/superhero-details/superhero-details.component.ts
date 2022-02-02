import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Superhero } from 'src/app/superhero.model';
import { SuperheroService } from 'src/app/superhero.service';

@Component({
  selector: 'app-superhero-details',
  templateUrl: './superhero-details.component.html',
  styleUrls: ['./superhero-details.component.css'],
})
export class SuperheroDetailsComponent implements OnInit {
  superheroId: string | null = this.route.snapshot.paramMap.get('id');
  loading: boolean = false;
  error: boolean = false;
  details: Superhero;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private superheroService: SuperheroService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.superheroService.getOneSuperheroDetails(this.superheroId).subscribe(
      (response) => {
        this.loading = false;
        this.details = response;
      },
      (error) => {
        this.error = true;
        this.loading = false;
        console.log('Something went wrong: ', error);
      }
    );
  }
}
