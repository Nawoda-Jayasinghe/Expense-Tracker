import React, { useState } from "react";

const AddNew = ({setTransactions}) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("income");

  const submitHandler = (e) => {
    e.preventDefault(); //to avoid refreshing the form when submitting
    setTransactions((transactionsList)=>{
        return [...transactionsList, {
            type: type,
            value: Number(amount),
            description: text
        }]
    });
  };

  const typeSelectHandler = (e) => {
      setType(e.target.value);
  };

  const topicHandler = (e) => {
    setText(e.target.value);
  };
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  //console.log(text,amount,type);

  return (
    <div className="container top">
      <h3 className="transactions">Add New Transaction</h3>
      <form onSubmit={submitHandler}>
        <div className="fields ">
          <div>
            <label>Select a transaction type</label>
          </div>
          <div>
            <select

              name="type"
              id="type"
              className="dropdown"
              value={type}
              onChange={typeSelectHandler}
            >
              <option value="income" className="options">
                Income
              </option>
              <option value="expense">Expense</option>
            </select>
          </div>
        </div>

        <div className="fields">
          <label htmlFor="topic">Topic</label>
          <input
            type="text"
            value={text}
            onChange={topicHandler}
            placeholder="Enter the topic of the transaction"
          ></input>
        </div>

        <div className="fields">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min={0}
            value={amount}
            onChange={amountHandler}
            placeholder="Enter the amount of the transaction"
          ></input>
        </div>

        <button className="btn" type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddNew;
