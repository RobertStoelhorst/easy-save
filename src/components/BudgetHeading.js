import React from "react";

export const BudgetHeading = (props) => {
  return (
    <div className="subheader">
      <p>Budget planner</p>
      <a
        id="ellipsis"
        href="https://moneysmart.gov.au/budgeting/budget-planner"
        add
        target="_blank"
        without
        rel="noreferrer"
      >
        &#8942;
      </a>
    </div>
  );
};
