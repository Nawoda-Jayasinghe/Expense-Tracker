import React from 'react'

const IncomeExpense = ({transactions}) => {

  const balance = transactions.reduce((previous, element) => {
    if(element.type === "income"){

      return {...previous, income: previous.income + element.value};
    }
    else{
      return {...previous, expense: previous.expense + element.value};
    }
  } , {
    income : 0,
    expense : 0
  } ) ;

  return (
    
    <div className='incomeExpense'>
        <div className='income'>
            <h4>Income</h4>
            <p>+{balance.income}LKR</p>
        </div>
        <div className='expense'>
            <h4>Expense</h4>
            <p>-{balance.expense}LKR</p>
        </div>
    </div>
  )
}

export default IncomeExpense