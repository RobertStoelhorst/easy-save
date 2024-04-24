import React, { useEffect, useRef, useState } from 'react';
import ChevronCircle from '../../Icons/ChevronCircle';
import CurrencyFormat from 'react-currency-format';
import ChevronArrow from '../../Icons/ChevronArrow';

const CategoryAccordion = ({
  id,
  category_total,
  name,
  display_name,
  fill,
  operation,
  sub_categories,
  onSubCategoryUpdate,
}) => {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState('accordion-icon');
  const [subCategoryData, setSubCategoryData] = useState('');

  const content = useRef(null);

  const toggleAccordion = () => {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === 'active' ? 'accordion-icon' : 'accordion-icon rotate'
    );
  };

  useEffect(() => {
    setSubCategoryData(sub_categories);
  }, [sub_categories]);

  return (
    <div key={name} id={id}>
      <div className="accordion-section">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <ChevronCircle className={'accordion-icon'} width={13} fill={fill} />
          <p className="accordion-title">{display_name}</p>
          <CurrencyFormat
            value={category_total !== null ? category_total : ''}
            displayType={'text'}
            thousandSeparator={true}
            prefix={`${
              (category_total !== null) &
              (category_total > 0) &
              (operation !== '+')
                ? operation
                : ''
            }$`}
            renderText={(formattedValue) => (
              <div className="result">
                {formattedValue === '$0' ? '' : formattedValue}
              </div>
            )}
          />

          <ChevronArrow
            className={`${setRotate}`}
            width={20}
            fill={'#d3d1d9'}
          />
        </button>
      </div>

      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion-container"
      >
        <div className="accordion-content">
          {subCategoryData &&
            subCategoryData.map((subCategory) => (
              <form key={subCategory.id}>
                <div className="category">
                  <div style={{ width: '35%' }}>
                    <label htmlFor={subCategory.name}>
                      {subCategory.label}
                    </label>
                  </div>
                  <div style={{ width: '25%' }}>
                    <CurrencyFormat
                      id={`${subCategory.name}-input`}
                      className="input-field"
                      value={
                        subCategory.amount === null ? '' : subCategory.amount
                      }
                      onValueChange={(value) => {
                        onSubCategoryUpdate(
                          value.value,
                          name,
                          subCategory.name,
                          'amount'
                        );
                      }}
                      displayType={'input'}
                      thousandSeparator={true}
                      prefix={undefined}
                      placeholder=""
                    />
                  </div>
                  <div style={{ width: '25%' }}>
                    <select
                      id={`${subCategory.name}-frequency-select`}
                      onChange={(e) =>
                        onSubCategoryUpdate(
                          e.target.value,
                          name,
                          subCategory.name,
                          'frequency'
                        )
                      }
                      className="period-list"
                      name=""
                    >
                      <option value="52">Weekly</option>
                      <option value="26">Fortnightly</option>
                      <option value="12">Monthly</option>
                      <option value="4">Quarterly</option>
                      <option value="1">Annually</option>
                    </select>
                  </div>
                  <div
                    style={{
                      width: '15%',
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <CurrencyFormat
                      id={`${subCategory.name}-total`}
                      value={subCategory?.amount * subCategory?.frequency || ''}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'$'}
                      renderText={(formattedValue) => (
                        <div className="result">{formattedValue}</div>
                      )}
                    />
                  </div>
                </div>
              </form>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryAccordion;

// import React, { useEffect, useRef, useState } from 'react';
// import ChevronCircle from '../../Icons/ChevronCircle';
// import CurrencyFormat from 'react-currency-format';
// import ChevronArrow from '../../Icons/ChevronArrow';

// const CategoryAccordion = ({
//   id,
//   name,
//   display_name,
//   fill,
//   operation,
//   sub_categories,
//   onSubCategoryUpdate,
// }) => {
//   const [setActive, setActiveState] = useState('');
//   const [setHeight, setHeightState] = useState('0px');
//   const [setRotate, setRotateState] = useState('accordion-icon');
//   // const [categoryTotalValues, setCategoryTotalValues] = useState('');
//   const [subCategoryData, setSubCategoryData] = useState(sub_categories);

//   const content = useRef(null);
//   const prevCategoryTotalValues = useRef(categoryTotalValues);

//   const toggleAccordion = () => {
//     setActiveState(setActive === '' ? 'active' : '');
//     setHeightState(
//       setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
//     );
//     setRotateState(
//       setActive === 'active' ? 'accordion-icon' : 'accordion-icon rotate'
//     );
//   };

//   // const handleChangeValue = (value, subCategoryName) => {
//   //   const name = subCategoryName;
//   //   updateSubCategoryValue(name, value, 'amount');
//   // };

//   // const handleSetFrequency = (value, subCategoryName) => {
//   //   const name = subCategoryName;
//   //   updateSubCategoryValue(name, value, 'frequency');
//   // };

//   const updateSubCategoryValue = (name, value, type) => {
//     setSubCategoryData((prevState) => {
//       const updatedSubCategories = prevState.map((subCategory) => {
//         if (subCategory.name === name) {
//           return {
//             ...subCategory,
//             [type]: value,
//           };
//         }
//         return subCategory;
//       });

//       return updatedSubCategories;
//     });
//   };

//   useEffect(() => {
//     const getCategoryTotalValues = () => {
//       let total = 0;
//       let valuesToUse = subCategoryData[name]
//         ? subCategoryData[name]
//         : subCategoryData;

//       for (let category in valuesToUse) {
//         // console.log(valuesToUse[category].amount);
//         const value =
//           valuesToUse[category].amount !== null &&
//           parseFloat(
//             valuesToUse[category].amount * valuesToUse[category].frequency
//           );
//         if (!isNaN(value) & (value !== null)) {
//           total += value;
//         }
//       }

//       return total;
//     };

//     const newCategoryTotalValues = getCategoryTotalValues();

//     if (newCategoryTotalValues !== prevCategoryTotalValues.current) {
//       prevCategoryTotalValues.current = newCategoryTotalValues;
//       setCategoryTotalValues(newCategoryTotalValues);
//       onSubCategoryUpdate(subCategoryData, name, newCategoryTotalValues);
//     }
//   }, [name, subCategoryData, onSubCategoryUpdate]);

//   return (
//     <div key={name} id={id}>
//       <div className="accordion-section">
//         <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
//           <ChevronCircle className={'accordion-icon'} width={13} fill={fill} />
//           <p className="accordion-title">{display_name}</p>
//           <CurrencyFormat
//             value={categoryTotalValues}
//             displayType={'text'}
//             thousandSeparator={true}
//             prefix={`${
//               (categoryTotalValues > 0) & (operation !== '+') ? operation : ''
//             }$`}
//             renderText={(formattedValue) => (
//               <div className="result">{formattedValue}</div>
//             )}
//           />

//           <ChevronArrow
//             className={`${setRotate}`}
//             width={20}
//             fill={'#d3d1d9'}
//           />
//         </button>
//       </div>

//       <div
//         ref={content}
//         style={{ maxHeight: `${setHeight}` }}
//         className="accordion-container"
//       >
//         <div className="accordion-content">
//           {subCategoryData &&
//             subCategoryData.map((subCategory) => {
//               return (
//                 <form key={subCategory.id}>
//                   <div className="category">
//                     <div style={{ width: '35%' }}>
//                       <label htmlFor={subCategory.name}>
//                         {subCategory.label}
//                       </label>
//                     </div>
//                     <div style={{ width: '25%' }}>
//                       <CurrencyFormat
//                         id={`${subCategory.name}-input`}
//                         className="input-field"
//                         value={subCategory?.amount || ''}
//                         onValueChange={(value) =>
//                           onSubCategoryUpdate(
//                             value.value,
//                             subCategory.name,
//                             'amount'
//                           )
//                         }
//                         displayType={'input'}
//                         thousandSeparator={true}
//                         prefix={undefined}
//                         placeholder=""
//                       />
//                     </div>
//                     <div style={{ width: '25%' }}>
//                       <select
//                         id={`${subCategory.name}-frequency-select`}
//                         onChange={(e) =>
//                           onSubCategoryUpdate(
//                             e.target.value,
//                             subCategory.name,
//                             'frequency'
//                           )
//                         }
//                         className="period-list"
//                         name=""
//                       >
//                         <option value="52">Weekly</option>
//                         <option value="26">Fortnightly</option>
//                         <option value="12">Monthly</option>
//                         <option value="4">Quarterly</option>
//                         <option value="1">Annually</option>
//                       </select>
//                     </div>
//                     <div
//                       style={{
//                         width: '15%',
//                         display: 'flex',
//                         justifyContent: 'flex-end',
//                       }}
//                     >
//                       <CurrencyFormat
//                         id={`${subCategory.name}-total`}
//                         value={
//                           subCategory?.amount * subCategory?.frequency || ''
//                         }
//                         displayType={'text'}
//                         thousandSeparator={true}
//                         prefix={'$'}
//                         renderText={(formattedValue) => (
//                           <div className="result">{formattedValue}</div>
//                         )}
//                       />
//                     </div>
//                   </div>
//                 </form>
//               );
//             })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryAccordion;
