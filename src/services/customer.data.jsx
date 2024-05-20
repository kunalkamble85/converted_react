import React from 'react';

class CustomerDataService {
  constructor($timeout) {
    this.$timeout = $timeout;
    this.customer = undefined;
    this.account = undefined;
  }

  setUser = (user) => {
    this.customer = user;
    this.$timeout(() => {
      localStorage.setItem('CurrentUser', JSON.stringify(this.customer));
    }, 0);
  };

  getUser = () => {
    if (typeof this.customer === "undefined") {
      const obj = localStorage.getItem('CurrentUser');
      if (obj) this.customer = JSON.parse(obj);
    }
    return this.customer;
  };

  setAccount = (acct) => {
    this.account = acct;
    if (typeof this.account !== "undefined") localStorage.setItem('CurrentAccount', JSON.stringify(this.account));
    else localStorage.removeItem('CurrentAccount');
  };

  getAccount = () => {
    if (typeof this.account === "undefined") {
      const obj = localStorage.getItem('CurrentAccount');
      if (obj) this.account = JSON.parse(obj);
    }
    return this.account;
  };
}

export default CustomerDataService;
