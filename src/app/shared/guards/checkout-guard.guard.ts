import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { CheckoutService } from './../services/checkout/checkout.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutGuardGuard implements CanActivate {

  constructor(private checkout: CheckoutService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.checkout.cart.length);
    if (this.checkout.cart.length === 0)  {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
