import React from 'react';

class TransactionService {
  constructor(Account) {
    this.Account = Account;
    this.txArray = {};
  }

  deposit = (userId, accountNo, amount) => {
    return this.transaction(userId, accountNo, amount, 0, new Date());
  };

  withdrawal = (userId, accountNo, amount) => {
    return this.transaction(userId, accountNo, 0, amount, new Date());
  };

  getTransactions = (userId, accountNo) => {
    if (this.txArray[userId]) return this.txArray[userId][accountNo];
  };

  loadObject = (obj) => {
    for (let x in obj) {
      if (typeof x !== "undefined") {
        for (let y in obj[x]) {
          if (typeof obj[x][y] !== "undefined") {
            for (let i = 0, len = obj[x][y].length; i < len; i++) {
              let date = obj[x][y][i].date;
              if (typeof date === "string") obj[x][y][i].date = new Date(date);
            }
          }
        }
      }
    }
    this.txArray = obj;
  };

  saveObj = () => {
    localStorage.setItem('Transaction', JSON.stringify(this.txArray));
  };

  deleteUser = (userId) => {
    delete this.txArray[userId];
  };

  deleteTx = (userId, accountNo) => {
    delete this.txArray[userId][accountNo];
    let success = this.Account.reset(accountNo);
    return success;
  };

  addTransaction = (user, account, depAmt, wdAmt, date) => {
    return this.transaction(user, account, depAmt, wdAmt, date);
  };

  transaction = (user, account, depAmt, wdAmt, date) => {
    this.txArray[user] = this.txArray[user] || {};
    this.txArray[user][account] = this.txArray[user][account] || [];

    let txObj = {};

    if (depAmt && depAmt > 0) {
      txObj = {
        date: date,
        amount: depAmt,
        deposit: true,
        success: this.Account.updateAmount(account, depAmt),
        type: "Credit"
      };
      if (txObj.success) this.txArray[user][account].push(txObj);
    }

    if (wdAmt && wdAmt > 0) {
      txObj = {
        date: date,
        amount: wdAmt,
        withdrawal: true,
        success: this.Account.updateAmount(account, -wdAmt),
        type: "Debit"
      };
      if (txObj.success) this.txArray[user][account].push(txObj);
    }

    return txObj;
  };
}

export default TransactionService;
