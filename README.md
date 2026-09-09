# My Simple Bank App

A small browser-based banking dashboard built with HTML, CSS, and vanilla JavaScript. The app lets you make deposits, withdraw money, view account totals, and reset the account to its starting balance.

## Features

- Starts with a balance of `$1000`
- Deposit a positive amount
- Withdraw funds when the account has enough money
- Track total deposits and total withdrawals
- Display success and validation messages
- Reset the balance and transaction totals
- Responsive, dependency-free interface

## Project Structure

```text
my-work-simple-bank-app/
├── JS/
│   ├── index.html      # Main application page
│   ├── style.css       # Application styles
│   └── scrtipt.js      # Account logic and event handlers
├── CSS/                # Additional CSS workspace files
└── HTML/               # Additional HTML workspace files
```

## Getting Started

No build tools or dependencies are required.

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   cd my-work-simple-bank-app
   ```

2. Open `JS/index.html` in a web browser.

For the best local development experience, serve the project with a simple static server, such as the VS Code Live Server extension.

## How to Use

1. Enter a positive number in the amount field.
2. Select **Deposit** to add it to the balance.
3. Select **Withdraw** to subtract it from the balance.
4. Select **Reset Account** to return to the initial state.

The app prevents empty, zero, and negative transactions. Withdrawals larger than the current balance are rejected.

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)

## License

This project is for learning and personal practice.
