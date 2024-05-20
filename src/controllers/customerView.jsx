import React, { useState } from 'react';

const CustomerViewCtrl = ({ User, Account, CustomerData }) => {
  const [custId, setCustId] = useState('');
  const [customers, setCustomers] = useState([]);

  const showAccount = () => {
    const user = User.getUser(custId);
    CustomerData.setUser(user);
    CustomerData.setAccount();
    // Assuming 'main.account' is a route, you can navigate using history or any routing library.
    // Replace this with your actual routing logic.
    // For example, using react-router-dom:
    // history.push('/main/account');
  };

  // Assuming User.getUsers() returns an array of customer objects
  useEffect(() => {
    setCustomers(User.getUsers());
  }, [User]);

  return (
    <div>
      {/* Your JSX content */}
      <select
        value={custId}
        onChange={(e) => setCustId(e.target.value)}
      >
        <option value="">---Select Customer---</option>
        {customers.map((customer) => (
          <option key={customer.id} value={customer.id}>
            {customer.fName} {customer.lName}
          </option>
        ))}
      </select>
      <button onClick={showAccount}>Show Account</button>
    </div>
  );
};

export default CustomerViewCtrl;
