import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BillData } from '../../models/bill-data.interface';

@Component({
  selector: 'app-view-bill-pay',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-bill-pay.component.html',
  styleUrls: ['./view-bill-pay.component.css']
})
export class ViewBillPayComponent implements OnInit {
  customerName: string = '';
  billData: BillData[] = [
    { consumerNumber: '113456789023', selected: false, dueAmount: 0, payableAmount: 0, billNumber: '00000001' },
    { consumerNumber: '567834521321', selected: false, dueAmount: 0, payableAmount: 0, billNumber: '00000002' },
    { consumerNumber: '112233445662', selected: true, dueAmount: 2028, payableAmount: 2028, billNumber: '94522456' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check if user is logged in
    this.customerName = localStorage.getItem('customerName') || '';
    if (!this.customerName) {
      this.router.navigate(['/login']);
      return;
    }
  }

  get totalPayable(): number {
    return this.billData
      .filter(bill => bill.selected)
      .reduce((sum, bill) => sum + bill.payableAmount, 0);
  }

  get hasSelectedBills(): boolean {
    return this.billData.some(bill => bill.selected);
  }

  proceedToPay(): void {
    const selectedBills = this.billData.filter(bill => bill.selected);
    localStorage.setItem('selectedBills', JSON.stringify(selectedBills));
    this.router.navigate(['/bill-payment']);
  }

  logout(): void {
    localStorage.removeItem('customerName');
    this.router.navigate(['/login']);
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  // Placeholder methods for other navigation items
  navigateToRegisterComplaint(): void {
    // Placeholder - no navigation
  }

  navigateToComplaintStatus(): void {
    // Placeholder - no navigation
  }
}