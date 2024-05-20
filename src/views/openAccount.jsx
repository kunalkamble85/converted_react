import React, { useState } from 'react';

function OpenAccountForm({ Customers, process }) {
  const [custId, setCustId] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the process function passed as prop
    process({ custId, currency });
  };

  return (
    <div>
      <div className="marTop">
        <form role="form" name="myForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Customer :</label>
            <select
              className="form-control"
              name="userSelect"
              id="userSelect"
              value={custId}
              onChange={(e) => setCustId(e.target.value)}
              required
            >
              <option value="">---Customer Name---</option>
              {Customers.map(cust => (
                <option key={cust.id} value={cust.id}>{cust.fName} {cust.lName}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Currency :</label>
            <select
              className="form-control"
              name="currency"
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              required
            >
              <option value="">---Currency---</option>
              <option value="Dollar">Dollar</option>
              <option value="Pound">Pound</option>
              <option value="Rupee">Rupee</option>
            </select>
          </div>
          <button type="submit" className="btn btn-default">Process</button>
        </form>
      </div>
    </div>
  );
}

export default OpenAccountForm;
