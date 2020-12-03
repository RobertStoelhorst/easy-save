import React from 'react';

export const Summary = (props) => {
  // console.log("expenseTotal", props.homeTotal);

  return (
    <div className="summary">
      <p className="">Summary</p>
      <p className="">${props.incomeTotal - props.homeTotal - props.insuranceTotal - props.groceriesTotal - props.personalTotal - props.entertainmentTotal - props.transportTotal - props.childrenTotal} </p>
    </div>
  );
}
