# Simple ATM Controller

This is a simple ATM controller implemented in React.js. It provides a basic user interface to simulate the flow of an ATM, including card insertion, PIN entry, account selection, and balance checking, deposit, and withdrawal operations.

## Getting Started

To run the ATM controller locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Change to the project directory: `cd atm-controller-react`
3. Install the dependencies: `npm install`
4. Start the application: `npm start`
5. Open your browser and visit `http://localhost:3000`

## Usage

The ATM controller provides a series of steps to simulate the ATM workflow:

1. Insert Card: Click the "Insert Card" button to simulate card insertion.
2. Enter PIN: Enter a PIN in the provided input field.
3. Select Account: Enter an account number in the provided input field.
4. See Balance: Click the "See Balance" button to display the account balance.
5. Deposit: Enter an amount in the "Enter Amount" field and click the "Deposit" button to simulate a deposit operation.
6. Withdraw: Enter an amount in the "Enter Amount" field and click the "Withdraw" button to simulate a withdrawal operation.

Please note that this implementation does not include actual API calls or back-end integration. It serves as a basic template for an ATM controller in React.js.

## Testing

The ATM controller includes a test file (`ATMController.test.js`) that verifies the behavior of the ATM user interface. To run the tests, use the following command:

```bash
npm test
