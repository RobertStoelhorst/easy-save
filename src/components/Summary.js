import React from 'react';
import CurrencyFormat from 'react-currency-format';

export const Summary = (props) => {
  // console.log("expenseTotal", props.homeTotal);
let sumTotal = (props.incomeTotal - props.homeTotal - props.insuranceTotal - props.groceriesTotal - props.personalTotal - props.entertainmentTotal - props.transportTotal - props.childrenTotal);

const CurrencyFormat = require('react-currency-format');

  return (
      <div className="summary">
        <p>Summary</p>
        <CurrencyFormat value={sumTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div className="summary-result">{value}</div>} />
      </div>
  );
}
