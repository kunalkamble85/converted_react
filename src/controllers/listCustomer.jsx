import React, { useState } from 'react';

const ListCustomerCtrl = ({ User, Account, Transaction }) => {
  const [customers, setCustomers] = useState(User.getUsers());

  const deleteCustomer = (cust) => {
    Account.deleteUser(cust.id);
    Transaction.deleteUser(cust.id);
    User.deleteUser(cust.id);

    // Update customers list
    setCustomers(User.getUsers());

    // Save data to localStorage
    User.saveObj();
    Account.saveObj();
    Transaction.saveObj();
  };

  return (
    <div>
      {/* Your JSX content */}
      {customers.map((cust) => (
        <div key={cust.id}>
          <span>{cust.fName} {cust.lName}</span>
          <button onClick={() => deleteCustomer(cust)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ListCustomerCtrl;
