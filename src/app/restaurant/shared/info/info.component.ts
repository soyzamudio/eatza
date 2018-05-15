import { Component, Input } from '@angular/core';

@Component({
  selector: 'za-restaurant-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class RestaurantInfoComponent {
  @Input()
  name: string;

  @Input()
  type: string;

  @Input()
  categories: Array<string>;

  @Input()
  closingTime: string;

  @Input()
  openingTime: string;

  @Input()
  address: string;

  @Input()
  city: string;

  @Input()
  ETA: string;

  @Input()
  priceRange: string;
}
