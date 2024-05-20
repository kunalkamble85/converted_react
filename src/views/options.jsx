import React from 'react';

function LoginPage({ customer, manager }) {
  return (
    <div>
      <div className="borderM box padT20">
        <div className="center">
          <button className="btn btn-primary btn-lg" onClick={customer}>Customer Login</button>
        </div>
        <br />
        <div className="center">
          <button className="btn btn-primary btn-lg" onClick={manager}>Bank Manager Login</button>
        </div>
      </div>

      <div className="container-fluid mainBox">
        {/* ui-view equivalent in React */}
      </div>
    </div>
  );
}

export default LoginPage;
