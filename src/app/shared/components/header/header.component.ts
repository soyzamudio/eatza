import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CheckoutService } from './../../services/checkout/checkout.service';

@Component({
  selector: 'za-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public checkout: CheckoutService, private router: Router) {}

  getCheckoutCount() {
    return this.checkout.cart.length ? this.checkout.getItemCount() : 0;
  }

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }

  getTotal() {
    console.log(this.checkout.getSubtotalLabel());
    console.log(this.checkout.getTotalLabel());
  }
}
