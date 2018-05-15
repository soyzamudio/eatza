import kebabCase from 'lodash-es/kebabCase';

import { Component, Input } from '@angular/core';

import { ItemCard } from '../../services/mock/mock.service';

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
