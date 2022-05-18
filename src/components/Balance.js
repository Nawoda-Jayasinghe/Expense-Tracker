import React from "react";

const Balance = ({ transactions }) => {
  const balance = transactions.reduce((previous, element) => {
    if(element.type === "income"){
      return previous+element.value;
    }
    else{
      return previous-element.value;
    }
  } , 0 ) ;

  return (
    <div>
      <h6 className="sub-header">Your Balance is</h6>
      <h1 id="balance">{balance}LKR</h1>
    </div>
  );
};

export default Balance;
