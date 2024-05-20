import React from 'react';

class AccountService {
  constructor(User) {
    this.acctArray = {};
    this.availableAcctNo = 1000;
    this.User = User;
  }

  createAccount = (userId, currency) => {
    if (userId && currency) {
      this.availableAcctNo++;
      const account = {
        accountNo: this.availableAcctNo,
        currency: currency,
        userId: userId,
        date: new Date(),
        amount: 0
      };
      this.acctArray[this.availableAcctNo] = account;
      this.User.addAccount(userId, this.availableAcctNo);
      return this.availableAcctNo;
    }
    return 0;
  };

  getAccount = (accountNo) => {
    return this.acctArray[accountNo];
  };

  updateAmount = (accountNo, amount) => {
    this.acctArray[accountNo].amount = this.acctArray[accountNo].amount || 0;
    if (amount < 0 && (this.acctArray[accountNo].amount + amount) < 0) {
      console.error("Can not perform this transaction");
      return false;
    } else {
      this.acctArray[accountNo].amount += amount;
      return true;
    }
  };

  reset = (accountNo) => {
    this.acctArray[accountNo].amount = 0;
  };

  loadObject = (obj) => {
    this.availableAcctNo = localStorage.getItem('maxAccountNo');
    this.acctArray = obj;
  };

  saveObj = () => {
    localStorage.setItem('Account', JSON.stringify(this.acctArray));
    localStorage.setItem('maxAccountNo', this.availableAcctNo);
  };

  deleteAccount = (accountNo) => {
    delete this.acctArray[accountNo];
  };

  deleteUser = (userId) => {
    const accounts = this.User.getUserAccounts(userId);
    if (accounts) {
      for (let i = 0, len = accounts.length; i < len; i++) {
        delete this.acctArray[accounts[i]];
      }
    }
  };
}

export default AccountService;
