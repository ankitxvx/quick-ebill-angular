import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillData } from '../view-bill-pay/bill-data.interface';

@Component({
  selector: 'app-bill-payment',
  templateUrl: './bill-payment.component.html',
  styleUrls: ['./bill-payment.component.css']
})
export class BillPaymentComponent implements OnInit {
  customerName: string = '';
  selectedBills: BillData[] = [];
  paymentMode: string = 'credit';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.customerName = localStorage.getItem('customerName') || '';
    const billsData = localStorage.getItem('selectedBills');
    
    if (billsData) {
      this.selectedBills = JSON.parse(billsData);
    } else {
      // No selected bills, redirect back to view-bill-pay
      this.router.navigate(['/view-bill-pay']);
    }
  }

  logout(): void {
    localStorage.removeItem('customerName');
    localStorage.removeItem('selectedBills');
    this.router.navigate(['/login']);
  }

  getBillAmount(): number {
    return this.selectedBills.length > 0 ? this.selectedBills[0].payableAmount : 0;
  }

  getTotalPayableAmount(): number {
    return this.selectedBills.reduce((total, bill) => total + bill.payableAmount, 0);
  }

  payNow(): void {
    const totalAmount = this.getTotalPayableAmount();
    const paymentModeText = this.paymentMode === 'credit' ? 'Credit Card' : 'Debit Card';
    
    alert(`Payment Summary:
Total Amount: ₹${totalAmount}
Payment Mode: ${paymentModeText}
Bills Count: ${this.selectedBills.length}

Payment processed successfully!`);
  }

  backToHome(): void {
    this.router.navigate(['/home']);
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