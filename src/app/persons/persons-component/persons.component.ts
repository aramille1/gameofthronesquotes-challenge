import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { Person } from 'src/app/interfaces/got.interface';
import { GotServiceService } from '../../services/got-service.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent {
  persons: Person[] = [];
  searchText: string = '';
  loaded: boolean = false;
  private getPersonsSub: Subscription

  constructor(private gotService: GotServiceService) { }

  ngOnInit() {
    this.getPersonsSub = this.gotService.getPersons().subscribe((data: Person[]) => {
      this.persons = data;
      this.loaded = true;
    });
  }

  ngOnDestroy() {
    this.getPersonsSub.unsubscribe();
  }
}
