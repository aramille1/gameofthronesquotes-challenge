import { HouseDetailsComponent } from './houses/house-details-component/house-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './houses/houses-component/houses.component';
import { PersonsComponent } from './persons/persons-component/persons.component';
import { QuotesComponent } from './quotes/quotes.component';
import { PersonsDetailsComponentComponent } from './persons/persons-details-component/persons-details-component.component';

const routes: Routes = [
  { path: 'houses', component: HousesComponent },
  { path: 'houses/:slug', component: HouseDetailsComponent },
  { path: 'persons', component: PersonsComponent },
  { path: 'persons/:slug', component: PersonsDetailsComponentComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: '', redirectTo: '/houses', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
