import React from 'react';

const BudgetHeading = (props) => {
  return (
    <div className="subheader">
      <p>Budget planner</p>
      <a
        id="ellipsis"
        href="https://moneysmart.gov.au/budgeting/budget-planner"
        target="_blank"
        rel="noreferrer"
      >
        &#8942;
      </a>
    </div>
  );
};

export default BudgetHeading;
