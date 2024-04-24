import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';

const Summary = ({ positiveIncome, summaryTotal }) => {
  const [summaryMessage, setSummaryMessage] = useState(
    'You are spending everything you earn.'
  );

  useEffect(() => {
    if (summaryTotal !== undefined && positiveIncome !== undefined) {
      if (summaryTotal !== 0) {
        const incomeFormatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(positiveIncome);

        const expenseFormatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(positiveIncome - summaryTotal);

        setSummaryMessage(
          summaryTotal >= 1
            ? `Your budget is in surplus. (i.e Income: ${incomeFormatted} vs Expenses: ${expenseFormatted})`
            : `You are spending more than you earn. (i.e Income: ${incomeFormatted} vs Expenses: ${expenseFormatted})`
        );
      } else {
        setSummaryMessage('You are spending everything you earn.');
      }
    }
  }, [positiveIncome, summaryTotal]);

  return (
    <>
      <div className="summary">
        <p>Summary</p>
        <CurrencyFormat
          value={summaryTotal || 0}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
          renderText={(value) => <div className="summary-result">{value}</div>}
        />
      </div>
      <div className="summary-context">
        <p>{summaryMessage}</p>
      </div>
    </>
  );
};

export default Summary;
