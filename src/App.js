/** @format */

import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import CATEGORIES from './config/categories';
import Header from './components/Header/Header';
import BudgetHeading from './components/BudgetHeading/BudgetHeading';
import Autosave from './components/Autosave/Autosave';
import BudgetCategoryAccordions from './components/BudgetCategoryAccordions/BudgetCategoryAccordions';
import Summary from './components/Summary/Summary';

// Programmatically inject custom parameters into the predefined CATEGORIES configuration object, I have done this to reduce repetitive hardcoded values.
const injectParams = (obj) => {
    const params = { amount: '', frequency: '52', category_total: null };

    return {
        ...obj,
        category_total: params.category_total,
        sub_categories: obj.sub_categories.map((subCategory) => ({
            ...subCategory,
            ...(subCategory.amount === undefined ? { amount: params.amount } : {}),
            ...(subCategory.frequency === undefined ? { frequency: params.frequency } : {}),
        })),
    };
};

const categoriesWithParams = CATEGORIES.map(injectParams);

const App = () => {
    const [loading, setLoading] = useState(true);
    const [autoSaving, setAutoSaving] = useState(false);
    const [budgetPlannerData, setBudgetPlannerData] = useState(null);
    const [positiveIncome, setPositiveIncome] = useState(0);
    const [budgetSummaryTotal, setBudgetSummaryTotal] = useState();

    // function to get the data from local storage, return null if it does not exist.
    const retrieveFromLocalStorage = () => {
        try {
            const jsonData = localStorage.getItem('budget_planner_data');
            if (jsonData === null) {
                return 'NO_LOCAL_STORAGE_DATA';
            } else {
                return JSON.parse(jsonData);
            }
        } catch (error) {
            console.error('Error while retrieving from local storage:', error);
            return null;
        }
    };

    // function to delete the data from the local storage, used when the 'Autosave' option is toggled off.
    const deleteLocalStorage = () => {
        try {
            localStorage.removeItem('budget_planner_data');
        } catch (error) {
            console.error('Error while deleting from local storage:', error);
        }
    };

    // function to update the data in the local storage with the new object state, effectively the JSON object is replaced with the new version based on a state update.
    const updateLocalStorage = (data) => {
        try {
            const jsonData = JSON.stringify(data ? data : null);
            localStorage.setItem('budget_planner_data', jsonData);
        } catch (error) {
            console.error('Error while updating local storage:', error);
        }
    };

    // function and logic to handle when the 'Autosave' option is toggled on or off, either save the data to local storage or delete it.
    const handleAutoSaving = (bool) => {
        setAutoSaving(bool);
        if (bool) {
            updateLocalStorage(budgetPlannerData);
        } else {
            deleteLocalStorage();
        }
    };

    //  function and logic to calculate the budget summary and set the state in setBudgetSummaryTotal()
    const getBudgetSummaryTotal = (data) => {
        let expenditure = 0;
        // Calculate summaryTotal for each category
        data.forEach((category, index) => {
            if (index !== 0) {
                expenditure += category.category_total;
            } else {
                // console.log('category.category_total', category.category_total);
                setPositiveIncome(category.category_total);
            }
        });
        const summaryTotal = data[0].category_total - expenditure;
        return setBudgetSummaryTotal(summaryTotal);
    };

    // function logic to to handle whenever new data is entered or edited, it will update the component state and local storage data as appropriate
    const handleChangeValue = (value, CategoryName, subCategoryName, type) => {
        const updatedCategoriesWithParams = budgetPlannerData.map((category) => {
            if (category.name === CategoryName) {
                const updatedSubCategories = category.sub_categories.map((subCategory) => {
                    if (subCategory.name === subCategoryName) {
                        let newValue = value;
                        return {
                            ...subCategory,
                            [type]: newValue,
                        };
                    }
                    return subCategory;
                });
                // calculate and update a category total based off all of its subcategories
                const categoryTotal = updatedSubCategories.reduce(
                    (total, subCat) => total + (subCat.amount * subCat.frequency || 0),
                    0
                );

                return {
                    ...category,
                    sub_categories: updatedSubCategories,
                    category_total: categoryTotal,
                };
            }
            return category;
        });

        // set all form data into state
        setBudgetPlannerData([...updatedCategoriesWithParams]);
        // call function to calculate the summary
        getBudgetSummaryTotal([...updatedCategoriesWithParams]);
        // if 'Autosave' toggled on, update local storage
        if (autoSaving) {
            updateLocalStorage([...updatedCategoriesWithParams]);
        }
    };

    // The first 'useEffect' is responsible for handling the initial setup of the component.
    // It runs once when the component mounts ([] dependency array), retrieves data from
    // local storage, sets the initial state of budgetPlannerData based on the retrieved data,
    // and sets the initial state of autoSaving based on whether data was retrieved from local
    // storage or not. This effect ensures that the component initializes correctly when it first renders.
    useEffect(() => {
        setLoading(true);
        const localStorageData = retrieveFromLocalStorage();
        if (localStorageData === 'NO_LOCAL_STORAGE_DATA' || !categoriesWithParams) {
            setBudgetPlannerData(categoriesWithParams);
            setAutoSaving(false);
        } else {
            getBudgetSummaryTotal(localStorageData);
            setBudgetPlannerData(localStorageData);
            setAutoSaving(true);
        }
        setLoading(false);
    }, []);

    // The second 'useEffect' monitors changes in autoSaving and budgetPlannerData. It is
    // triggered whenever either of these states changes. When autoSaving is true and there's
    // valid data in budgetPlannerData, it updates the data in local storage. If autoSaving
    // is false or budgetPlannerData is empty, it removes the data from local storage. This
    // effect ensures that changes to the data are persisted in local storage when autosave
    // is enabled and the data is updated.
    useEffect(() => {
        if (autoSaving && budgetPlannerData) {
            updateLocalStorage(budgetPlannerData);
        } else {
            deleteLocalStorage();
        }
    }, [autoSaving, budgetPlannerData]);

    // console.log('budgetPlannerData', budgetPlannerData);
    // console.log('budgetSummaryTotal', budgetSummaryTotal);

    // during the initial phase of the component's lifecycle we will check if 'loading' is 'true'
    // or 'autoSaving' is 'undefined' if either condition is met render some text 'Loading...'
    if (loading || autoSaving === undefined) {
        return (
            <div className="container">
                <div className="app-wrapper">
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="app-wrapper">
                <Box sx={{ mb: 4 }}>
                    <Box
                        sx={{
                            pl: { xs: 2, sm: 0, md: 0, lg: 0, xl: 0 },
                            pr: { xs: 2, sm: 0, md: 0, lg: 0, xl: 0 },
                        }}
                    >
                        <Header />
                        <Autosave
                            isSaving={autoSaving}
                            onToggle={(val) => {
                                handleAutoSaving(val);
                            }}
                        />
                    </Box>
                    <BudgetHeading />
                    <BudgetCategoryAccordions
                        accordionConfig={budgetPlannerData}
                        onSubCategoryUpdate={(value, CategoryName, subCategoryName, type) => {
                            handleChangeValue(value, CategoryName, subCategoryName, type);
                        }}
                    />
                    <Summary
                        positiveIncome={positiveIncome}
                        summaryTotal={budgetSummaryTotal}
                    />
                </Box>
            </div>
        </div>
    );
};

export default App;

// /** @format */

// import React, { useState } from 'react';
// import { Header } from './Header';
// import { BudgetHeading } from './BudgetHeading';
// import Autosave from './Autosave';
// import { Income } from './Income';
// import { Summary } from './Summary';
// import { HomeUtils } from './Homeutils';
// import { Insurance } from './Insurance';
// import { Groceries } from './Groceries';
// import { Personal } from './Personal';
// import { Entertainment } from './Entertainment';
// import { Transport } from './Transport';
// import { Children } from './Children';

// function App() {
//     const [incomeTotal, setIncomeTotal] = useState(0);
//     const [homeTotal, setHomeTotal] = useState(0);
//     const [insuranceTotal, setInsuranceTotal] = useState(0);
//     const [groceriesTotal, setGroceriesTotal] = useState(0);
//     const [personalTotal, setPersonalTotal] = useState(0);
//     const [entertainmentTotal, setEntertainmentTotal] = useState(0);
//     const [transportTotal, setTransportTotal] = useState(0);
//     const [childrenTotal, setChildrenTotal] = useState(0);

//     return (
//         <div className="container">
//             <div className="app-wrapper">
//                 <Header />
//                 <Autosave />
//                 <BudgetHeading />
//                 <Income
//                     incomeTotal={incomeTotal}
//                     updateIncome={setIncomeTotal}
//                 />
//                 <HomeUtils
//                     homeTotal={homeTotal}
//                     updateHome={setHomeTotal}
//                 />
//                 <Insurance
//                     insuranceTotal={insuranceTotal}
//                     updateInsurance={setInsuranceTotal}
//                 />
//                 <Groceries
//                     groceriesTotal={groceriesTotal}
//                     updateGroceries={setGroceriesTotal}
//                 />
//                 <Personal
//                     personalTotal={personalTotal}
//                     updatePersonal={setPersonalTotal}
//                 />
//                 <Entertainment
//                     entertainmentTotal={entertainmentTotal}
//                     updateEntertainment={setEntertainmentTotal}
//                 />
//                 <Transport
//                     transportTotal={transportTotal}
//                     updateTransport={setTransportTotal}
//                 />
//                 <Children
//                     childrenTotal={childrenTotal}
//                     updateChildren={setChildrenTotal}
//                 />
//                 <Summary
//                     childrenTotal={childrenTotal}
//                     transportTotal={transportTotal}
//                     entertainmentTotal={entertainmentTotal}
//                     personalTotal={personalTotal}
//                     groceriesTotal={groceriesTotal}
//                     insuranceTotal={insuranceTotal}
//                     homeTotal={homeTotal}
//                     incomeTotal={incomeTotal}
//                 />
//             </div>
//         </div>
//     );
// }

// export default App;
