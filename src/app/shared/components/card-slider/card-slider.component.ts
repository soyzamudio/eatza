import { DragScrollDirective } from 'ngx-drag-scroll';

import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'za-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent {
  @Input()
  cards: any;

  @Input()
  headerTitle: string;

  @Input()
  newItem = false;

  @ViewChild('nav', {read: DragScrollDirective})
  ds: DragScrollDirective;

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }
}
