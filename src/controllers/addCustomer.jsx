import React, { useState } from 'react';

const AddCustomerController = ({ User }) => {
  const [logout, setLogout] = useState(false);
  const [btnClass1, setBtnClass1] = useState('btn-primary');
  const [btnClass2, setBtnClass2] = useState('');
  const [btnClass3, setBtnClass3] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [postCd, setPostCd] = useState('');

  const addCustomer = () => {
    const user = { fName, lName, postCd };
    const id = User.addUser(user);
    if (id === 0) {
      alert('Please check the details. Customer may be duplicate.');
    } else {
      alert(`Customer added successfully with customer id: ${id}`);
      setFName('');
      setLName('');
      setPostCd('');
      User.saveObj();
    }
  };

  return (
    <div>
      {/* Your JSX content */}
    </div>
  );
};

export default AddCustomerController;
