import { Component } from '@angular/core';

import { ModalService } from './shared/services/modal/modal.service';

@Component({
  selector: 'za-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private modalService: ModalService) {}

  removeModal() {
    this.modalService.destroy();
  }
}
