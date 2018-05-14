import { Component } from '@angular/core';

@Component({
  selector: 'za-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor() {
    console.log(this);
  }
}
