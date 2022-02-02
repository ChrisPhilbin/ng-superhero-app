import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Superhero } from 'src/app/superhero.model';

@Component({
  selector: 'app-superhero-details',
  templateUrl: './superhero-details.component.html',
  styleUrls: ['./superhero-details.component.css'],
})
export class SuperheroDetailsComponent implements OnInit {
  superheroId = this.route.snapshot.paramMap.get('id');
  loading: boolean = false;
  erors: boolean = false;
  details: Superhero;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.getSuperheroDetails();
  }

  getSuperheroDetails() {
    this.loading = true;
    this.http
      .get<Superhero>(
        `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${this.superheroId}.json`
      )
      .subscribe((responseDetails) => {
        this.details = responseDetails;
        document.title = this.details.name;
        this.loading = false;
      });
  }
}
