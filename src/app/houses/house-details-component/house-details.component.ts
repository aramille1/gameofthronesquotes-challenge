import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { House, Member } from 'src/app/interfaces/got.interface';
import { GotServiceService } from '../../services/got-service.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css'],
})
export class HouseDetailsComponent implements OnInit {
  houseSlug: string = '';
  house: string = '';
  members: Member[] = [];
  loaded: boolean = false;
  private getHouseSub: Subscription;

  constructor(private route: ActivatedRoute, private gotService: GotServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.houseSlug = params.get('slug') as string;

      this.getHouseSub = this.gotService.getHouse(this.houseSlug).subscribe((data: House[]) => {
        const { name, members } = data[0];
        this.house = name;
        this.members = members
        this.loaded = true;
      });
    });
  }

  ngOnDestroy() {
    this.getHouseSub.unsubscribe()
  }
}
