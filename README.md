# Quick EBill Angular Application

A modern Angular application for managing electricity bills and payments, built with Angular 17 using a module-based architecture.

## Features

- **User Authentication**: Secure login system with form validation
- **Home Dashboard**: Welcome page with navigation and user information
- **Bill Management**: View and select multiple bills for payment
- **Payment Processing**: Complete payment flow with payment mode selection
- **Responsive Design**: Mobile-friendly interface with responsive navigation
- **Bill Selection**: Interactive bill table with checkbox selection
- **Total Calculation**: Real-time calculation of total payable amounts
- **Payment Modes**: Support for credit and debit card payment options

## Tech Stack

- **Frontend Framework**: Angular 17
- **Language**: TypeScript
- **Styling**: CSS3 with responsive design
- **Forms**: Reactive Forms and Template-driven Forms
- **Routing**: Angular Router with guards
- **State Management**: LocalStorage for session management

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher
- **Angular CLI**: Version 17.0 or higher

```bash
# Install Angular CLI globally
npm install -g @angular/cli@17
```

## Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ankitxvx/quick-ebill-angular.git
   cd quick-ebill-angular
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

## Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build the project for production
- `npm run watch` - Build and watch for changes
- `npm test` - Run unit tests

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── login/                 # Login component with reactive forms
│   │   ├── home/                  # Home dashboard component
│   │   ├── view-bill-pay/         # Bill viewing and selection component
│   │   └── bill-payment/          # Payment processing component
│   ├── guards/
│   │   └── auth.guard.ts          # Route protection guard
│   ├── app-routing.module.ts      # Application routing configuration
│   ├── app.module.ts             # Main application module
│   └── app.component.*           # Root component
├── styles.css                    # Global styles
├── index.html                   # Main HTML file
└── main.ts                     # Application bootstrap
```

## Usage

### Login
1. Navigate to the application
2. Enter any User ID and Password (both fields are required)
3. Click "Sign In" to access the dashboard

### Home Dashboard
- View welcome message with logged-in user name
- Navigate through different sections using the navigation bar
- Logout to clear session and return to login

### Bill Management
1. Click "Pay Bill" in navigation
2. View available bills in the table
3. Select bills using checkboxes
4. See real-time total calculation
5. Click "Proceed To Pay" when bills are selected

### Payment Process
1. Review selected bills and amounts
2. Choose payment mode (Credit Card/Debit Card)
3. Click "Pay Now" to process payment
4. View payment confirmation
5. Return to home or continue with other operations

## Future Enhancements

- **Backend Integration**: Connect to REST APIs for real bill data
- **Payment Gateway**: Integrate with actual payment processors
- **Bill History**: Add bill payment history and tracking
- **User Registration**: Implement user registration system
- **Forgot Password**: Add password recovery functionality
- **Complaint System**: Implement complaint registration and tracking
- **Multi-language Support**: Add internationalization (i18n)
- **Dark Mode**: Add theme switching capability
- **PDF Generation**: Generate bill receipts and statements
- **Push Notifications**: Real-time bill due notifications
- **Advanced Filtering**: Add bill filtering and search capabilities
- **Data Export**: Export bill data to CSV/Excel formats
