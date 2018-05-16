import { Component, Input } from '@angular/core';

import { ModalService } from './../../../../shared/services/modal/modal.service';
import { IngredientsComponent } from '../../ingredients/ingredients.component';

@Component({
  selector: 'za-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input()
  item: any;

  @Input()
  restaurantId: string;

  constructor(private modal: ModalService) {}

  openIngreditenModal() {
    this.modal.init(IngredientsComponent, { item: this.item, restaurantId: this.restaurantId }, {});
  }
}
