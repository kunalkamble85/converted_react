import React, { useState } from 'react';

function ListTransaction({ transactions }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [sortType, setSortType] = useState('date');
  const [sortReverse, setSortReverse] = useState(false);

  const handleSort = (type) => {
    if (type === sortType) {
      setSortReverse(!sortReverse);
    } else {
      setSortType(type);
      setSortReverse(false);
    }
  };

  return (
    <div className="marTop tbStruct border box">
      <div className="fixedTopBox">
        <button style={{ float: 'left' }} className="btn" onClick={() => {}}>Back</button>
        <div className="center">
          <input
            style={{ width: '130px' }}
            type="datetime-local"
            id="start"
            name="start"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="yyyy-MM-ddTHH:mm:ss"
            required
          />
          <input
            style={{ width: '130px' }}
            type="datetime-local"
            id="end"
            name="end"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="yyyy-MM-ddTHH:mm:ss"
            required
          />
        </div>
        <img
          style={{ float: 'right', marginTop: '-30px' }}
          src="assets/Reset.png"
          onClick={() => {}}
          width="40px"
          height="40px"
        />
      </div>
      <div style={{ height: '300px' }}>
        <div style={{ height: '70px' }} id="anchor"></div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <td>
                <a href="#" onClick={() => handleSort('date')}>
                  Date-Time
                  {sortType === 'date' && !sortReverse && <span className="fa fa-caret-down"></span>}
                  {sortType === 'date' && sortReverse && <span className="fa fa-caret-up"></span>}
                </a>
              </td>
              <td><a>Amount</a></td>
              <td><a>Transaction Type</a></td>
            </tr>
          </thead>
          <tbody>
            {transactions
              .filter(tx => (!startDate || new Date(tx.date) >= new Date(startDate)) && (!endDate || new Date(tx.date) <= new Date(endDate)))
              .sort((a, b) => sortReverse ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date))
              .map((tx, index) => (
                <tr key={index} id={`anchor${index}`}>
                  <td>{new Date(tx.date).toLocaleString()}</td>
                  <td>{tx.amount}</td>
                  <td>{tx.type}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="fixedBottomBox" style={{ marginTop: '58px' }}>
        <button className="btn btn-primary" style={{ float: 'left' }} onClick={() => {}}>{'<'}</button>
        <button className="btn btn-primary" style={{ marginLeft: '40%' }} onClick={() => {}}>Top</button>
        <button className="btn btn-primary" style={{ float: 'right' }} onClick={() => {}}>{'>'}</button>
      </div>
    </div>
  );
}

export default ListTransaction;
