import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customerName: string = '';

  constructor(public router: Router) {}

  ngOnInit(): void {
    // Check if user is logged in
    this.customerName = localStorage.getItem('customerName') || '';
    if (!this.customerName) {
      this.router.navigate(['/login']);
      return;
    }
  }

  logout(): void {
    localStorage.removeItem('customerName');
    this.router.navigate(['/login']);
  }

  navigateToPayBill(): void {
    this.router.navigate(['/view-bill-pay']);
  }

  // Placeholder methods for other navigation items
  navigateToRegisterComplaint(): void {
    // Placeholder - no navigation
  }

  navigateToComplaintStatus(): void {
    // Placeholder - no navigation
  }
}