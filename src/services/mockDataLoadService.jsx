import React from 'react';

class MockLoaderService {
  constructor(User, Account, Transaction) {
    this.User = User;
    this.Account = Account;
    this.Transaction = Transaction;
    this.users = [
      { fName: "Hermoine", lName: "Granger", postCd: "E859AB" },
      { fName: "Harry", lName: "Potter", postCd: "E725JB" },
      { fName: "Ron", lName: "Weasly", postCd: "E55555" },
      { fName: "Albus", lName: "Dumbledore", postCd: "E55656" },
      { fName: "Neville", lName: "Longbottom", postCd: "E89898" }
    ];
  }

  loadData = () => {
    const userObj = localStorage.getItem("User");
    const acctObj = localStorage.getItem("Account");
    const txObj = localStorage.getItem("Transaction");

    if (userObj && acctObj && userObj !== null && acctObj !== null) {
      this.User.loadObject(JSON.parse(userObj));
      this.Account.loadObject(JSON.parse(acctObj));
      if (txObj) {
        this.Transaction.loadObject(JSON.parse(txObj));
      }
    } else {
      for (let i = 0, len = this.users.length; i < len; i++) {
        const userId = this.User.addUser(this.users[i]);
        this.Account.createAccount(userId, "Dollar");
        this.Account.createAccount(userId, "Pound");
        this.Account.createAccount(userId, "Rupee");
      }
      // Adding transactions for only 1 user
      const userId = this.User.getUsers()[0].id;
      const accountNo = this.User.getUserAccounts(userId)[0];
      for (let i = 0; i <= 6; i++) {
        for (let j = 1; j <= 28; j++) {
          const date = new Date(2015, i, j);
          this.Transaction.addTransaction(userId, accountNo, 30, 4, date);
        }
      }

      this.User.saveObj();
      this.Account.saveObj();
      this.Transaction.saveObj();
    }
  };
}

export default MockLoaderService;
