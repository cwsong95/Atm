import React, { useState } from 'react';

function ATMController() {
  const [cardInserted, setCardInserted] = useState(false);
  const [pinEntered, setPinEntered] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [amount, setAmount] = useState('');

  const insertCard = () => {
    setCardInserted(true);
  };

  const enterPin = (pin) => {
    // Simulate API call to validate the PIN
    const isPinValid = validatePin(pin);

    if (isPinValid) {
      setPinEntered(true);
    } else {
      setPinEntered(false);
      setSelectedAccount(null);
      setBalance(null);
    }
  };

  const selectAccount = (accountNumber) => {
    // Simulate API call to validate the account number
    const isValidAccount = validateAccount(accountNumber);

    if (isValidAccount) {
      setSelectedAccount(accountNumber);
      const accountBalance = getAccountBalance(accountNumber);
      setBalance(accountBalance);
    } else {
      setSelectedAccount(null);
      setBalance(null);
    }
  };

  const seeBalance = () => {
    if (selectedAccount) {
      const accountBalance = getAccountBalance(selectedAccount);
      setBalance(accountBalance);
    }
  };

  const deposit = (amount) => {
    if (selectedAccount) {
      // Simulate API call to deposit the amount
      const newBalance = balance + parseInt(amount);
      setBalance(newBalance);
    }
  };

  const withdraw = (amount) => {
    if (selectedAccount) {
      // Simulate API call to withdraw the amount
      const newBalance = balance - parseInt(amount);
      if (newBalance >= 0) {
        setBalance(newBalance);
      }
    }
  };

  const validatePin = (pin) => {
    // Simulate API call to validate the PIN
    const validPin = '1234'; // Example valid PIN
    return pin === validPin;
  };

  const validateAccount = (accountNumber) => {
    // Simulate API call to validate the account number
    const validAccounts = ['1234567890', '0987654321']; // Example valid account numbers
    return validAccounts.includes(accountNumber);
  };

  const getAccountBalance = (accountNumber) => {
    // Simulate API call to retrieve the account balance
    const accountBalanceMap = {
      '1234567890': 1000, // Example account balance
      '0987654321': 500, // Example account balance
    };
    return accountBalanceMap[accountNumber] || null;
  };

  return (
    <div>
      <h2>ATM Controller</h2>
      {!cardInserted && (
        <button onClick={insertCard}>Insert Card</button>
      )}
      {cardInserted && !pinEntered && (
        <div>
          <input
            type="password"
            placeholder="Enter PIN"
            onChange={(e) => enterPin(e.target.value)}
          />
        </div>
      )}
      {pinEntered && !selectedAccount && (
        <div>
          <input
            type="text"
            placeholder="Enter Account Number"
            onChange={(e) => selectAccount(e.target.value)}
          />
        </div>
      )}
      {selectedAccount && (
        <div>
          <button onClick={seeBalance}>See Balance</button>
          {balance && <p>Account Balance: ${balance}</p>}
        </div>
      )}
      {selectedAccount && (
        <div>
          <input
            type="text"
            placeholder="Enter Amount"
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={() => deposit(amount)}>Deposit</button>
          <button onClick={() => withdraw(amount)}>Withdraw</button>
        </div>
      )}
    </div>
  );
}

export default ATMController;
