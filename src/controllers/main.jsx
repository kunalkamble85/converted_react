import React from 'react';

const MainCtrl = ({ history }) => {
  const goToOptions = () => {
    history.push('/main/options');
  };

  const goToCustomerView = () => {
    history.push('/main/custView');
  };

  return (
    <div>
      {/* Your JSX content */}
      <button onClick={goToOptions}>Go to Options</button>
      <button onClick={goToCustomerView}>Go to Customer View</button>
    </div>
  );
};

export default MainCtrl;
