import React, { useState } from 'react';

function WithdrawalTransaction({ withdrawl }) {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the withdrawl function passed as prop
    if (!amount || amount <= 0) {
      setMessage('Please enter a valid amount.');
    } else {
      setMessage('');
      withdrawl(amount);
      // Reset the form after submission
      setAmount('');
    }
  };

  return (
    <div className="">
      <span className="error">{message}</span><br />

      <form role="form" name="myForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Amount to be Withdrawn :</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="amount"
            required
          /><br />
        </div>
        <button type="submit" className="btn btn-default">Withdraw</button>
      </form>
    </div>
  );
}

export default WithdrawalTransaction;
