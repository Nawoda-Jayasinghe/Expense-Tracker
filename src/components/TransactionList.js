import React from "react";

const TransactionList = ({ transactions }) => {
  return (
    <div className="container top">
      <h3 className="transactions">Transactions</h3>
      {transactions.map((transaction, index) => {
        return (
          <div key={index} className="transactions-item-wrapper" style={{backgroundColor: transaction.type === 'income'? 'rgb(230, 255, 232)' :' rgb(255, 234, 242)' }}>
            <div className="items">{transaction.type} </div>
            <div className="items">{transaction.value} </div>
            <div className="items">{transaction.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionList;
