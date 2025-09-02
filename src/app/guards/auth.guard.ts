import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const customerName = localStorage.getItem('customerName');
    if (customerName) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}