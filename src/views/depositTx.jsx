import React, { useState } from 'react';

function DepositTransaction({ deposit }) {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === '') {
      setMessage('Please enter the amount to deposit.');
    } else {
      deposit(amount);
      setAmount('');
      setMessage('');
    }
  };

  return (
    <div className="">
      <span className="error">{message}</span>
      <br />
      <form role="form" name="myForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Amount to be Deposited :</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="amount"
            required
          />
          <br />
        </div>
        <button type="submit" className="btn btn-default">
          Deposit
        </button>
      </form>
    </div>
  );
}

export default DepositTransaction;
