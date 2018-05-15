import { Component, ViewChild } from '@angular/core';

import { CheckoutService } from './../../services/checkout/checkout.service';

@Component({
  selector: 'za-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public checkout: CheckoutService) {}

  getCheckoutCount() {
    return this.checkout.cart.length ? this.checkout.cart.length : 0;
  }

  getTotal() {
    console.log(this.checkout.getSubtotalLabel());
    console.log(this.checkout.getTotalLabel());
  }
}
