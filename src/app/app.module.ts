import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousesComponent } from './houses/houses-component/houses.component';
import { PersonsComponent } from './persons/persons-component/persons.component';
import { QuotesComponent } from './quotes/quotes.component';
import { HouseDetailsComponent } from './houses/house-details-component/house-details.component';
import { PersonsDetailsComponentComponent } from './persons/persons-details-component/persons-details-component.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    PersonsComponent,
    QuotesComponent,
    HouseDetailsComponent,
    PersonsDetailsComponentComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
