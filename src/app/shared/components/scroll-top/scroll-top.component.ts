import { Component } from '@angular/core';

import { ScrollerService } from '../../services/scroller/scroller.service';
@Component({
  selector: 'za-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss'],
})
export class ScrollTopComponent {
  constructor(public scroller: ScrollerService) {}
}
