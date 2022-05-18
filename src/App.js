import React, { useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddNew from "./components/AddNew";

import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([
    // {
    //   type: "income",
    //   value: 1000000,
    //   description: "Salary",
    // },
    // {
    //   type: "expense",
    //   value: 5000,
    //   description: "Food",
    // },
    // {
    //   type: "expense",
    //   value: 8000,
    //   description: "Education",
    // },
  ]);

  return (
    <div className="center">
      <Header />
      <div className="container my-10">
        <Balance transactions={transactions} />
        <IncomeExpense transactions={transactions} />
      </div>

      <div className="my-10">
        <AddNew setTransactions={setTransactions} />
      </div>

      <div className="my-10">
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
