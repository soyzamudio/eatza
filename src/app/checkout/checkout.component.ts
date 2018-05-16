import { Component, OnInit } from '@angular/core';

import { CheckoutService } from './../shared/services/checkout/checkout.service';

@Component({
  selector: 'za-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(public checkout: CheckoutService) { }

  ngOnInit() {
  }

}
