import { Component, Input, OnInit } from '@angular/core';
import { Superhero } from 'src/app/superhero.model';

@Component({
  selector: 'app-superhero-card',
  templateUrl: './superhero-card.component.html',
  styleUrls: ['./superhero-card.component.css'],
})
export class SuperheroCardComponent implements OnInit {
  @Input() superhero: Superhero;
  constructor() {}

  ngOnInit(): void {}
}
