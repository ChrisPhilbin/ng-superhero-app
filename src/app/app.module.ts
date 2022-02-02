import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperheroDashboardComponent } from './superhero-dashboard/superhero-dashboard.component';
import { SuperheroDetailsComponent } from './superhero-dashboard/superhero-details/superhero-details.component';
import { SuperheroCardComponent } from './superhero-dashboard/superhero-card/superhero-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperheroDashboardComponent,
    SuperheroDetailsComponent,
    SuperheroCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
