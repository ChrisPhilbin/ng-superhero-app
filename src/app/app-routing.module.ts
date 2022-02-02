import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperheroDashboardComponent } from './superhero-dashboard/superhero-dashboard.component';
import { SuperheroDetailsComponent } from './superhero-dashboard/superhero-details/superhero-details.component';

const routes: Routes = [
  { path: '', component: SuperheroDashboardComponent },
  { path: 'superheros/:id', component: SuperheroDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
