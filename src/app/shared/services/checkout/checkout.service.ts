import { Injectable } from '@angular/core';

import { ItemCard } from './../mock/mock.service';

const DELIVERY_PRICE = 39;

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  cart: Array<any> = [];
  restaurantId: string;

  addToCheckout(item: any, id: string) {
    if (!this.cart.length) {
      this.restaurantId = id;
      this.cart.push(item);
    } else if (this.restaurantId === id) {
      this.cart.push(item);
    }
  }

  getSubtotalLabel(): string {
    if (!this.cart.length) {
      return '$0';
    }

    const subtotal = this.subtotal();

    return `$${subtotal}`;
  }

  getSubtotal(): number {
    if (!this.cart.length) {
      return 0;
    }

    const subtotal = this.subtotal();
    return subtotal;
  }

  getTotalLabel(): string {
    if (!this.cart.length) {
      return '$0';
    }

    const subtotal = this.subtotal();
    return `$${subtotal + DELIVERY_PRICE}`;
  }

  getTotal(): number {
    if (!this.cart.length) {
      return 0;
    }

    const subtotal = this.subtotal();
    return subtotal + DELIVERY_PRICE;
  }

  private subtotal(): number {
    return this.cart
      .map((item) => this.getItemTotal(item.price))
      .reduce((a, b) => a + b);
  }

  private getItemTotal(item: any) {
    return item.price * item.quantity;
  }
}
