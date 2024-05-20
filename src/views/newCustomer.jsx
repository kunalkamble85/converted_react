import React, { useState } from 'react';

function AddCustomerForm({ addCustomer }) {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [postCd, setPostCd] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the addCustomer function passed as prop
    addCustomer({ fName, lName, postCd });
    // Clear the form inputs after submission
    setFName('');
    setLName('');
    setPostCd('');
  };

  return (
    <div>
      <div className="marTop">
        <form name="myForm" role="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name :</label>
            <input
              className="form-control"
              type="text"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
              placeholder="First Name"
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name :</label>
            <input
              className="form-control"
              type="text"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-group">
            <label>Post Code :</label>
            <input
              className="form-control"
              type="text"
              value={postCd}
              onChange={(e) => setPostCd(e.target.value)}
              placeholder="Post Code"
              required
            />
          </div>
          <button type="submit" className="btn btn-default">Add Customer</button>
        </form>
      </div>
    </div>
  );
}

export default AddCustomerForm;
