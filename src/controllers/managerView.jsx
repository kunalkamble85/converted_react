import React from 'react';

const ManagerViewCtrl = ({ history }) => {
  const addCustomer = () => {
    history.push('/main/mgrView/add');
  };

  const openAccount = () => {
    history.push('/main/mgrView/account');
  };

  const showCustomers = () => {
    history.push('/main/mgrView/list');
  };

  return (
    <div>
      {/* Your JSX content */}
      <button onClick={addCustomer}>Add Customer</button>
      <button onClick={openAccount}>Open Account</button>
      <button onClick={showCustomers}>Show Customers</button>
    </div>
  );
};

export default ManagerViewCtrl;
