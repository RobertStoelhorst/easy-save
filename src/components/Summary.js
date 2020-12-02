import React from 'react';

export const Summary = (props) => {
  // console.log("expenseTotal", props.homeTotal);

  return (
    <div className="summary">
      <p className="summary-result">Summary</p>
      <p className="summary-result">${props.incomeTotal - props.homeTotal - props.insuranceTotal - props.groceriesTotal - props.personalTotal - props.entertainmentTotal - props.transportTotal - props.childrenTotal} </p>
        <div className="message">
          <p>Your balance is in surplass</p>
          <p>Your balance is in deficit</p>
        </div>
    </div>
  );
}
