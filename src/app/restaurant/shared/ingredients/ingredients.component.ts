import { Component } from '@angular/core';

import { CheckoutService } from './../../../shared/services/checkout/checkout.service';
import { ModalService } from './../../../shared/services/modal/modal.service';

@Component({
  selector: 'za-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent {
  item = this.item;
  restaurantId = this.restaurantId;
  commentBox = '';

  constructor(public modal: ModalService, private checkout: CheckoutService) {
    console.log(this);
  }

  onIngredientChange(item: any) {
    item.included = !item.included;
  }

  increaseQuantity() {
    this.item.quantity++;
  }

  decreaseQuantity() {
    if (this.item.quantity > 0) {
      this.item.quantity--;
    }
  }

  addToCart() {
    if (this.commentBox) {
      this.item.specialInstructions = this.commentBox;
    }

    if (this.item.quantity > 0) {
      this.checkout.addToCheckout(this.item, this.restaurantId);
      this.modal.destroy();
      console.log(this.checkout.cart);
    }
  }
}
