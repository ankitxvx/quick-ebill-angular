import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BillData } from '../../models/bill-data.interface';

@Component({
  selector: 'app-bill-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bill-payment.component.html',
  styleUrls: ['./bill-payment.component.css']
})
export class BillPaymentComponent implements OnInit {
  selectedBills: BillData[] = [];
  selectedPaymentMode: string = 'credit';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check if user is logged in
    const customerName = localStorage.getItem('customerName');
    if (!customerName) {
      this.router.navigate(['/login']);
      return;
    }

    // Get selected bills from localStorage
    const billsData = localStorage.getItem('selectedBills');
    if (!billsData) {
      this.router.navigate(['/view-bill-pay']);
      return;
    }

    try {
      this.selectedBills = JSON.parse(billsData);
    } catch (error) {
      console.error('Error parsing selected bills:', error);
      this.router.navigate(['/view-bill-pay']);
    }
  }

  get billAmount(): number {
    return this.selectedBills.length > 0 ? this.selectedBills[0].payableAmount : 0;
  }

  get totalPayableAmount(): number {
    return this.selectedBills.reduce((sum, bill) => sum + bill.payableAmount, 0);
  }

  payNow(): void {
    const paymentSummary = {
      bills: this.selectedBills,
      totalAmount: this.totalPayableAmount,
      paymentMode: this.selectedPaymentMode === 'credit' ? 'Credit Card' : 'Debit Card'
    };

    alert(`Payment Summary:\n\nTotal Amount: ₹${this.totalPayableAmount}\nPayment Mode: ${paymentSummary.paymentMode}\nNumber of Bills: ${this.selectedBills.length}\n\nPayment would be processed here.`);
  }

  backToHome(): void {
    this.router.navigate(['/home']);
  }
}