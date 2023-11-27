import { PersonQoute } from './../../interfaces/got.interface';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/interfaces/got.interface';
import { GotServiceService } from '../../services/got-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons-details-component',
  templateUrl: './persons-details-component.component.html',
  styleUrls: ['./persons-details-component.component.css']
})
export class PersonsDetailsComponentComponent {
  personSlug: string = '';
  personName: string = '';
  personHouseName: string = '';
  quotes: string[] = [];
  loaded: boolean = false;
  private getPersonSub: Subscription
  private getPersonQuotesSub: Subscription


  constructor(private route: ActivatedRoute, private gotService: GotServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.personSlug = params.get('slug') as string;

      this.getPersonSub = this.gotService.getPerson(this.personSlug).subscribe((data: Person[]) => {
        const { name, house, quotes } = data[0];
        this.personName = name;
        this.quotes = quotes
        this.personHouseName = house?.name as string
        this.loaded = true;
      });
    });
  }

  replaceQuotes() {
    this.getPersonQuotesSub = this.gotService.getPersonQuotes(this.personSlug).subscribe((qoutes: PersonQoute[]) => {
      this.quotes = qoutes.map((quote: PersonQoute) => quote.sentence)
    })
  }

  ngOnDestroy() {
    this.getPersonSub.unsubscribe();
    this.getPersonQuotesSub.unsubscribe();
  }
}
