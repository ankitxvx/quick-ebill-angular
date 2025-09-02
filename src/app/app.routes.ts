import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ViewBillPayComponent } from './components/view-bill-pay/view-bill-pay.component';
import { BillPaymentComponent } from './components/bill-payment/bill-payment.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'view-bill-pay', component: ViewBillPayComponent },
  { path: 'bill-payment', component: BillPaymentComponent },
  { path: '**', redirectTo: '/login' }
];