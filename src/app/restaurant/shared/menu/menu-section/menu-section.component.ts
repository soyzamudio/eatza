import { Component, Input } from '@angular/core';

import { MockService } from './../../../../shared/services/mock/mock.service';

@Component({
  selector: 'za-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss']
})
export class MenuSectionComponent {
  @Input()
  category: string;

  @Input()
  restaurant: any;

  constructor(public mock: MockService) { }

  getMenuByCategory() {
    return this.restaurant.menu[this.category];
  }
}
