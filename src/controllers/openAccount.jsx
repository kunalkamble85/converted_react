import React, { useState } from 'react';

const OpenAccountCtrl = ({ User, Account }) => {
  const [custId, setCustId] = useState('');
  const [currency, setCurrency] = useState('');
  const [customers, setCustomers] = useState(User.getUsers());

  const process = () => {
    const acctNo = Account.createAccount(custId, currency);
    if (acctNo === 0) {
      alert("Something went wrong. Account can not be opened.");
    } else {
      alert("Account created successfully with account Number: " + acctNo);
      setCurrency("");
      setCustId("");
      User.saveObj();
      Account.saveObj();
    }
  };

  return (
    <div>
      <select value={custId} onChange={(e) => setCustId(e.target.value)}>
        <option value="">---Customer Name---</option>
        {customers.map((customer) => (
          <option key={customer.id} value={customer.id}>
            {customer.fName} {customer.lName}
          </option>
        ))}
      </select>
      <input type="text" value={currency} onChange={(e) => setCurrency(e.target.value)} placeholder="Currency" />
      <button onClick={process}>Process</button>
    </div>
  );
};

export default OpenAccountCtrl;
