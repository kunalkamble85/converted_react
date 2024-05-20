import React, { useState } from 'react';

const DepositCtrl = ({ Account, Transaction, CustomerData }) => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const deposit = () => {
    const txObj = Transaction.deposit(CustomerData.getUser().id, CustomerData.getAccount().accountNo, amount);
    if (txObj.success) {
      setMessage('Deposit Successful');
      // Emitting event using $emit in AngularJS can be replaced with a state update or prop passing in React
      // For example, if the parent component is listening to changes in 'message', you can pass it as a prop
      // and update it there
    } else {
      setMessage('Something went wrong. Please try again.');
    }
    setAmount('');
    // Save data to localStorage after a timeout (0 ms) to simulate asynchronous behavior
    setTimeout(() => {
      Account.saveObj();
      Transaction.saveObj();
    }, 0);
  };

  return (
    <div>
      {/* Your JSX content */}
      <span className="error">{message}</span><br />
      <form onSubmit={deposit}>
        <div className="form-group">
          <label>Amount to be Deposited :</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            required
          />
        </div>
        <button type="submit" className="btn btn-default">Deposit</button>
      </form>
    </div>
  );
};

export default DepositCtrl;
