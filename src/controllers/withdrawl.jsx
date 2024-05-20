import React, { useState } from 'react';

const WithdrawlCtrl = ({ Account, Transaction, CustomerData }) => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  
  const handleWithdrawl = () => {
    const txObj = Transaction.withdrawl(CustomerData.getUser().id, CustomerData.getAccount().accountNo, amount);
    if (!txObj.success) {
      setMessage("Transaction Failed. You can not withdraw amount more than the balance.");
    } else {
      setMessage("Transaction successful.");
      // Emit the event to update the amount
      // Replace this with your actual logic to update the amount
    }
    setAmount('');
    // Save changes
    Account.saveObj();
    Transaction.saveObj();
  };

  return (
    <div>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleWithdrawl}>Withdraw</button>
      <span>{message}</span>
    </div>
  );
};

export default WithdrawlCtrl;
