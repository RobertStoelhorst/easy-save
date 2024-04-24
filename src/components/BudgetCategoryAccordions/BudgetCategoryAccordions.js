import React from 'react';
import CategoryAccordion from '../CategoryAccordion/CategoryAccordion';

const BudgetCategoryAccordions = ({ accordionConfig, onSubCategoryUpdate }) => {
  return accordionConfig.map((category) => (
    <CategoryAccordion
      key={category.id}
      {...category}
      onSubCategoryUpdate={(value, CategoryName, subCategoryName, type) => {
        onSubCategoryUpdate(value, CategoryName, subCategoryName, type);
      }}
    />
  ));
};

export default BudgetCategoryAccordions;
