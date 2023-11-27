import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { House } from 'src/app/interfaces/got.interface';
import { GotServiceService } from '../../services/got-service.service'

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent {
  houses: House[] = [];
  searchText: string = '';
  loaded = false;
  private getHousesSub: Subscription;

  constructor(private gotService: GotServiceService) { }

  ngOnInit() {
    this.getHousesSub = this.gotService.getHouses().subscribe((data: House[]) => {
      this.houses = data;
      this.loaded = true;
    });
  }

  ngOnDestroy() {
    this.getHousesSub.unsubscribe();
  }
}
