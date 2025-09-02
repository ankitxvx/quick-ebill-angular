import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customerName: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.customerName = localStorage.getItem('customerName') || '';
  }

  logout(): void {
    localStorage.removeItem('customerName');
    localStorage.removeItem('selectedBills');
    this.router.navigate(['/login']);
  }

  onRegisterComplaintClick(event: Event): void {
    event.preventDefault();
    // Placeholder for register complaint functionality
  }

  onComplaintStatusClick(event: Event): void {
    event.preventDefault();
    // Placeholder for complaint status functionality
  }
}