import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import "./styles.css";

// Import your React components for each route
import Main from './views/main';
// import Options from './views/options';
import ManagerView from './views/managerView';
// import AddCustomer from './views/AddCustomer';
import OpenAccount from './views/openAccount';
import CustomerList from './views/customerList';
import CustomerView from './views/customerView';
import Account from './views/account';
import DepositTransaction from './views/depositTx';
import WithdrawalTransaction from './views/withdrawalTx';
import ListTransaction from './views/listTx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Main />} />
        <Route path="/manager" element={<ManagerView />} />
        {/* <Route path="/addCust" element={<AddCustomer />} /> */}
        <Route path="/openAccount" element={<OpenAccount />} />
        <Route path="/list" element={<CustomerList />} />
        <Route path="/customer" element={<CustomerView />} />
        <Route path="/account" element={<Account />} />
        <Route path="/deposit" element={<DepositTransaction />} />
        <Route path="/withdrawal" element={<WithdrawalTransaction />} />
        <Route path="/listTx" element={<ListTransaction />} />
      </Routes>
    </Router>
  );
}

export default App;
