import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ItemCard, MockService } from './../shared/services/mock/mock.service';

@Component({
  selector: 'za-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent {
  restaurantId: string;
  restaurant: ItemCard;
  menuCategories: Array<string>;

  constructor(private actiavedRoute: ActivatedRoute, private mock: MockService) {
    this.restaurantId = this.actiavedRoute.snapshot.params.id;
    this.restaurant = this.mock.getStoreById(this.restaurantId);
  }

  getMenuCategories(): Array<string> {
    return this.restaurant.menu.categories;
  }
}
