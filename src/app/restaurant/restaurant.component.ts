import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ItemCard } from './../shared/components/item-card/item-card.component';
import { MockService } from './../shared/services/mock/mock.service';

@Component({
  selector: 'za-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent {
  restaurantId: string;
  restaurant: ItemCard;

  constructor(private actiavedRoute: ActivatedRoute, private mock: MockService) {
    this.restaurantId = this.actiavedRoute.snapshot.params.id;
    this.restaurant = this.mock.getStoreById(this.restaurantId);
    console.log(this.restaurant);
  }
}
