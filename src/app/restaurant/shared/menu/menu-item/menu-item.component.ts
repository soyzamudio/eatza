import { Component, Input } from '@angular/core';

import { CheckoutService } from './../../../../shared/services/checkout/checkout.service';

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

  quantity = 0;

  constructor(private checkout: CheckoutService) {}

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  addToCart() {
    if (this.item.quantity > 0) {
      this.checkout.addToCheckout(this.item, this.restaurantId);
    }
  }

  getSubtotal() {
    console.log(this.checkout.getSubtotal());
  }
}
