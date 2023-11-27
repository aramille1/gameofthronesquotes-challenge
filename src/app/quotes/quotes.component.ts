import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { PersonQoute } from '../interfaces/got.interface';
import { GotServiceService } from '../services/got-service.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent {
  quotes: PersonQoute[] = [];
  loaded: boolean = false;
  private allQoutesSub: Subscription

  constructor(private gotService: GotServiceService) { }

  ngOnInit() {
    this.getQuotes();
  }

  getQuotes() {
    this.allQoutesSub = this.gotService.getAllQuotes().subscribe((data: PersonQoute[]) => {
      this.quotes = data;
      this.loaded = true;
    });
  }

  replaceQuotes() {
    this.getQuotes();
  }

  ngOnDestroy() {
    this.allQoutesSub.unsubscribe()
  }
}
