import kebabCase from 'lodash-es/kebabCase';

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ItemCard } from '../../services/mock/mock.service';

@Component({
  selector: 'za-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input() item: ItemCard;
  @Input() newItem = false;

  constructor(private router: Router) {}

  getUrl(): string {
    return `${this.item.city.toLowerCase()}/a-domicilio/${kebabCase(this.item.title)}/${this.item.id}`;
  }

  goToSearch(cat: string) {
    this.router.navigate(['/search'],  { queryParams: { q: cat.toLocaleLowerCase() } });
  }
}
