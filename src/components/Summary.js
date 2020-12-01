import React, { useState } from 'react';

export const Summary = (props) => {
  return (
    <div className="summary">
      <h1>Summary</h1>
      <h1>${(e) => props.summaryTotal(e.target.val)}</h1>
        <div className="message">
          <p>Your balance is in surplass</p>
          <p>Your balance is in deficit</p>
        </div>
    </div>
  );
}
