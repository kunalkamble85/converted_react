import React, { useState, useEffect } from 'react';

const ListTransactionCtrl = ({ Transaction, Account, CustomerData }) => {
  const [transactions, setTransactions] = useState([]);
  const [left, setLeft] = useState(false);
  const [x, setX] = useState(0);

  useEffect(() => {
    const txs = Transaction.getTransactions(CustomerData.getUser().id, CustomerData.getAccount().accountNo);
    if (txs && txs.length > 0) {
      const sortedTxs = txs.sort((a, b) => new Date(b.date) - new Date(a.date));
      setTransactions(sortedTxs);
    }
  }, [Transaction, Account, CustomerData]);

  const reset = () => {
    Transaction.deleteTx(CustomerData.getUser().id, CustomerData.getAccount().accountNo);
    setTransactions([]);
    // Save changes
    Account.saveObj();
    Transaction.saveObj();
  };

  const scrollLeft = () => {
    setX((prevX) => prevX - 8);
    const id = x > 0 ? `anchor${x}` : 'anchor';
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView();
    });
    setLeft(x <= 0 ? false : true);
  };

  const scrollRight = () => {
    setLeft(true);
    let newX = x === 0 ? 5 : x + 8;
    if (!document.getElementById(`anchor${newX}`)) {
      if (x === 5) newX = 0;
      else newX = x - 8;
    }
    setTimeout(() => {
      document.getElementById(`anchor${newX}`)?.scrollIntoView();
    });
    setX(newX);
  };

  const scrollTop = () => {
    setX(0);
    setTimeout(() => {
      document.getElementById('anchor')?.scrollIntoView();
    });
  };

  const back = () => {
    // Navigate to the account page
    // Replace this with your actual routing logic
  };

  return (
    <div>
      {/* Render your JSX content */}
    </div>
  );
};

export default ListTransactionCtrl;
