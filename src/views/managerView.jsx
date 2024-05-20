import React from 'react';

function ManagerView({ btnClass1, btnClass2, btnClass3, addCust, openAccount, showCust }) {
  return (
    <div className="border box padT20">
      <div className="center">
        <button className={`btn btn-lg tab ${btnClass1}`} onClick={addCust}>
          Add Customer
          {btnClass1 === 'btn-primary' && <b id="notch" className="notch"></b>}
        </button>
        <button className={`btn btn-lg tab ${btnClass2}`} onClick={openAccount}>
          Open Account
          {btnClass2 === 'btn-primary' && <b id="notch" className="notch"></b>}
        </button>
        <button className={`btn btn-lg tab ${btnClass3}`} onClick={showCust}>
          Customers
          {btnClass3 === 'btn-primary' && <b id="notch" className="notch"></b>}
        </button>
      </div>
      <div className="">{/* ui-view equivalent in React */}</div>
    </div>
  );
}

export default ManagerView;
