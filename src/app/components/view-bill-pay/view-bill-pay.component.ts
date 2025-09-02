import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillData } from './bill-data.interface';

@Component({
  selector: 'app-view-bill-pay',
  templateUrl: './view-bill-pay.component.html',
  styleUrls: ['./view-bill-pay.component.css']
})
export class ViewBillPayComponent implements OnInit {
  customerName: string = '';
  bills: BillData[] = [
    { consumerNumber: '113456789023', selected: false, dueAmount: 0, payableAmount: 0, billNumber: '00000001' },
    { consumerNumber: '567834521321', selected: false, dueAmount: 0, payableAmount: 0, billNumber: '00000002' },
    { consumerNumber: '112233445662', selected: true, dueAmount: 2028, payableAmount: 2028, billNumber: '94522456' }
  ];

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

  getTotalPayable(): number {
    return this.bills
      .filter(bill => bill.selected)
      .reduce((total, bill) => total + bill.payableAmount, 0);
  }

  hasSelectedBills(): boolean {
    return this.bills.some(bill => bill.selected);
  }

  proceedToPay(): void {
    const selectedBills = this.bills.filter(bill => bill.selected);
    if (selectedBills.length > 0) {
      localStorage.setItem('selectedBills', JSON.stringify(selectedBills));
      this.router.navigate(['/bill-payment']);
    }
  }
}