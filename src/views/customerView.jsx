import React, { useState } from 'react';

function CustomerView({ Customers, showAccount }) {
  const [custId, setCustId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (custId !== '') {
      showAccount();
    }
  };

  return (
    <div className="borderM box padT20">
      <form role="form" name="myForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Name :</label>
          <select
            className="form-control"
            name="userSelect"
            id="userSelect"
            value={custId}
            onChange={(e) => setCustId(e.target.value)}
          >
            <option value="">---Your Name---</option>
            {Customers.map((cust) => (
              <option key={cust.id} value={cust.id}>
                {cust.fName} {cust.lName}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-default" type="submit" style={{ display: custId !== '' ? 'block' : 'none' }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default CustomerView;
