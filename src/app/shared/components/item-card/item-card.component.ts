import kebabCase from 'lodash-es/kebabCase';

import { Component, Input } from '@angular/core';

export interface ItemCard {
  id: string;
  title?: string;
  type?: string;
  categories?: string[];
  ETA?: string;
  priceRange?: string;
  image?: string;
  city?:  string;
}

@Component({
  selector: 'za-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input() item: ItemCard;
  @Input() newItem = false;

  getUrl(): string {
    return `${this.item.city.toLowerCase()}/a-domicilio/${kebabCase(this.item.title)}/${this.item.id}`;
  }
}
