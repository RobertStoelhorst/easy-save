import React from 'react';

export const Summary = (props) => {
  return (
    <div className="summary">
      <h1>Summary</h1>
      <h1>${props.incomeTotal}</h1>
        <div className="message">
          <p>Your balance is in surplass</p>
          <p>Your balance is in deficit</p>
        </div>
    </div>
  );
}
