import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      userId: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Clear any existing customer data
    localStorage.removeItem('customerName');
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const userId = this.loginForm.get('userId')?.value;
      localStorage.setItem('customerName', userId);
      this.router.navigate(['/home']);
    }
  }

  onRegisterClick(event: Event): void {
    event.preventDefault();
    // Placeholder for registration functionality
  }

  onForgotPasswordClick(event: Event): void {
    event.preventDefault();
    // Placeholder for forgot password functionality
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
}