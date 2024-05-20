import React from 'react';

const OptionCtrl = ({ history }) => {
  const manager = () => {
    history.push('/main/mgrView');
  };

  const customer = () => {
    history.push('/main/custView');
  };

  return (
    <div>
      <button onClick={manager}>Manager</button>
      <button onClick={customer}>Customer</button>
    </div>
  );
};

export default OptionCtrl;
