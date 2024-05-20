import React from 'react';

class UserService {
  constructor() {
    this.userArray = {};
    this.availableUserId = 0;
  }

  addUser = (user) => {
    if (user && user.fName && user.lName && user.postCd && !this.duplicate(user)) {
      this.availableUserId++;
      user.id = this.availableUserId;
      user.date = new Date();
      this.userArray[this.availableUserId] = user;
      return this.availableUserId;
    }
    return 0;
  };

  getUser = (uniqueId) => {
    return this.userArray[uniqueId];
  };

  getUsers = () => {
    let array = [];
    for (let userid in this.userArray) {
      array.push(this.userArray[userid]);
    }
    return array;
  };

  deleteUser = (uniqueId) => {
    delete this.userArray[uniqueId];
  };

  addAccount = (uniqueId, accountNo) => {
    this.userArray[uniqueId].accountNo = this.userArray[uniqueId].accountNo || [];
    this.userArray[uniqueId].accountNo.push(accountNo);
  };

  getUserAccounts = (uniqueId) => {
    return this.userArray[uniqueId].accountNo;
  };

  loadObject = (obj) => {
    this.userArray = obj;
    this.availableUserId = localStorage.getItem('maxUserId');
  };

  saveObj = () => {
    localStorage.setItem('User', JSON.stringify(this.userArray));
    localStorage.setItem('maxUserId', this.availableUserId);
  };

  duplicate = (userObj) => {
    for (let user in this.userArray) {
      if (
        userObj.fName === this.userArray[user].fName &&
        userObj.lName === this.userArray[user].lName &&
        userObj.postCd === this.userArray[user].postCd
      ) {
        return true;
      }
    }
    return false;
  };
}

export default UserService;
