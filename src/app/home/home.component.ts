import { Component } from '@angular/core';

import { MockService } from '../shared/services/mock/mock.service';

@Component({
  selector: 'za-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  location = 'Veracruz';

  constructor(public mock: MockService) { }
}
