import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const AccountController = ({ CustomerData, User, Account, Transaction }) => {
  const [logout, setLogout] = useState(true);
  const [user, setUser] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [noAccount, setNoAccount] = useState(false);
  const [accountNo, setAccountNo] = useState('');
  const [currency, setCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const history = useHistory();

  useEffect(() => {
    setLogout(true);
    const userObj = CustomerData.getUser();
    setUser(`${userObj.fName} ${userObj.lName}`);
    const userAccounts = User.getUserAccounts(userObj.id);
    setAccounts(userAccounts);
    if (userAccounts && userAccounts.length > 0) {
      const acctObj = CustomerData.getAccount();
      if (typeof acctObj !== 'undefined') {
        setAccountNo(acctObj.accountNo);
        setCurrency(acctObj.currency);
        setAmount(acctObj.amount);
      } else {
        setAccountNo(userAccounts[0]);
        accountSelected();
      }
    } else {
      setNoAccount(true);
    }
  }, [CustomerData, User]);

  const handleAmountChange = () => {
    const acctObj = CustomerData.getAccount();
    setAmount(acctObj.amount);
  };

  const selectAccount = () => {
    accountSelected();
    // Assuming `refresh` is a custom event for child components
  };

  const transactions = () => {
    history.push('/main/list');
    setBtnClasses('btn-primary', '', '');
  };

  const deposit = () => {
    history.push('/main/account/deposit');
    setBtnClasses('', 'btn-primary', '');
  };

  const withdrawal = () => {
    history.push('/main/account/withdrawal');
    setBtnClasses('', '', 'btn-primary');
  };

  const accountSelected = () => {
    const acctObj = Account.getAccount(accountNo);
    setCurrency(acctObj.currency);
    setAmount(acctObj.amount);
    CustomerData.setAccount(acctObj);
  };

  const setBtnClasses = (btnClass1, btnClass2, btnClass3) => {
    // Set button classes accordingly
  };

  return (
    <div>
      {/* Your JSX content */}
    </div>
  );
};

export default AccountController;
