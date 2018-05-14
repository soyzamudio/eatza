import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollerService {

  scrollToTop() {
    window.scroll(0, 0);
  }
}
