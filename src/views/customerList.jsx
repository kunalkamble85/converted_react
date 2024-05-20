import React, { useState } from 'react';

function CustomerList({ Customers }) {
  const [searchCustomer, setSearchCustomer] = useState('');
  const [sortType, setSortType] = useState('');
  const [sortReverse, setSortReverse] = useState(false);

  const handleSort = (type) => {
    if (sortType === type) {
      setSortReverse(!sortReverse);
    } else {
      setSortType(type);
      setSortReverse(false);
    }
  };

  const deleteCust = (cust) => {
    // Logic to delete customer
  };

  return (
    <div className="marTop" style={{ maxHeight: '100%', overflow: 'scroll' }}>
      <form>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-addon"><i className="fa fa-search"></i></div>
            <input
              type="text"
              className="form-control"
              placeholder="Search Customer"
              value={searchCustomer}
              onChange={(e) => setSearchCustomer(e.target.value)}
            />
          </div>
        </div>
      </form>

      <div style={{ height: '250px' }}>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <td>
                <a href="#" onClick={() => handleSort('fName')}>
                  First Name
                  {sortType === 'fName' && !sortReverse && <span className="fa fa-caret-down"></span>}
                  {sortType === 'fName' && sortReverse && <span className="fa fa-caret-up"></span>}
                </a>
              </td>
              <td>
                <a href="#" onClick={() => handleSort('lName')}>
                  Last Name
                  {sortType === 'lName' && !sortReverse && <span className="fa fa-caret-down"></span>}
                  {sortType === 'lName' && sortReverse && <span className="fa fa-caret-up"></span>}
                </a>
              </td>
              <td>
                <a href="#" onClick={() => handleSort('postCd')}>
                  Post Code
                  {sortType === 'postCd' && !sortReverse && <span className="fa fa-caret-down"></span>}
                  {sortType === 'postCd' && sortReverse && <span className="fa fa-caret-up"></span>}
                </a>
              </td>
              <td>Account Number</td>
              <td>Delete Customer</td>
            </tr>
          </thead>

          <tbody>
            {Customers.filter(cust => 
              cust.fName.toLowerCase().includes(searchCustomer.toLowerCase()) ||
              cust.lName.toLowerCase().includes(searchCustomer.toLowerCase()) ||
              cust.postCd.includes(searchCustomer)
            ).sort((a, b) => {
              if (sortType === 'fName') {
                return sortReverse ? b.fName.localeCompare(a.fName) : a.fName.localeCompare(b.fName);
              } else if (sortType === 'lName') {
                return sortReverse ? b.lName.localeCompare(a.lName) : a.lName.localeCompare(b.lName);
              } else if (sortType === 'postCd') {
                return sortReverse ? b.postCd.localeCompare(a.postCd) : a.postCd.localeCompare(b.postCd);
              } else {
                return 0;
              }
            }).map(cust => (
              <tr key={cust.id}>
                <td>{cust.fName}</td>
                <td>{cust.lName}</td>
                <td>{cust.postCd}</td>
                <td>{cust.accountNo.join(' ')}</td>
                <td><button onClick={() => deleteCust(cust)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerList;