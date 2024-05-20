import React, { useState } from 'react';

function Account({ user, Accounts }) {
  const [noAccount, setNoAccount] = useState(true);
  const [accountNo, setAccountNo] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [btnClass1, setBtnClass1] = useState('btn btn-lg tab');
  const [btnClass2, setBtnClass2] = useState('btn btn-lg tab');
  const [btnClass3, setBtnClass3] = useState('btn btn-lg tab');

  const selectAcct = () => {
    // Logic for selecting account
  };

  const transactions = () => {
    // Logic for transactions
  };

  const deposit = () => {
    // Logic for deposit
  };

  const withdrawl = () => {
    // Logic for withdrawal
  };

  return (
    <div className="borderM box padT20">
      <div>
        <strong>
          Welcome <span className="fontBig">{user}</span> !!
        </strong>
        <span style={{ display: noAccount ? 'inline' : 'none' }}>
          Please open an account with us.
        </span>
        <select
          style={{ marginLeft: '10px' }}
          hidden={noAccount}
          onChange={selectAcct}
          value={accountNo}
          name="accountSelect"
          id="accountSelect"
        >
          {Accounts.map((account) => (
            <option key={account} value={account}>
              {account}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div style={{ display: noAccount ? 'none' : 'block' }} className="center">
        Account Number : <strong>{accountNo}</strong>, Balance : <strong>{amount}</strong> ,
        Currency : <strong>{currency}</strong>
      </div>
      <br />
      <div style={{ display: noAccount ? 'none' : 'block' }} className="center">
        <button
          className={btnClass1}
          onClick={transactions}
        >
          Transactions
          <b style={{ display: btnClass1 === 'btn-primary' ? 'inline' : 'none' }} id="notch" className="notch"></b>
        </button>
        <button
          className={btnClass2}
          onClick={deposit}
        >
          Deposit
          <b style={{ display: btnClass2 === 'btn-primary' ? 'inline' : 'none' }} id="notch" className="notch"></b>
        </button>
        <button
          className={btnClass3}
          onClick={withdrawl}
        >
          Withdrawal
          <b style={{ display: btnClass3 === 'btn-primary' ? 'inline' : 'none' }} id="notch" className="notch"></b>
        </button>
      </div>
      <div style={{ display: accountNo !== '' ? 'block' : 'none' }} className="container-fluid mainBox">
        {/* Placeholder for content */}
      </div>
    </div>
  );
}

export default Account;
