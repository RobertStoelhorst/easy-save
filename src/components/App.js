import React, { useState } from "react";
import { Header } from "./Header";
import { BudgetHeading } from "./BudgetHeading";
import Autosave from "./Autosave";
import { Income } from "./Income";
import { Summary } from "./Summary";
import { HomeUtils } from "./Homeutils";
import { Insurance } from "./Insurance";
import { Groceries } from "./Groceries";
import { Personal } from "./Personal";
import { Entertainment } from "./Entertainment";
import { Transport } from "./Transport";
import { Children } from "./Children";

function App() {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [homeTotal, setHomeTotal] = useState(0);
  const [insuranceTotal, setInsuranceTotal] = useState(0);
  const [groceriesTotal, setGroceriesTotal] = useState(0);
  const [personalTotal, setPersonalTotal] = useState(0);
  const [entertainmentTotal, setEntertainmentTotal] = useState(0);
  const [transportTotal, setTransportTotal] = useState(0);
  const [childrenTotal, setChildrenTotal] = useState(0);

  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <Autosave />
        <BudgetHeading />
        <Income incomeTotal={incomeTotal} updateIncome={setIncomeTotal} />
        <HomeUtils homeTotal={homeTotal} updateHome={setHomeTotal} />
        <Insurance
          insuranceTotal={insuranceTotal}
          updateInsurance={setInsuranceTotal}
        />
        <Groceries
          groceriesTotal={groceriesTotal}
          updateGroceries={setGroceriesTotal}
        />
        <Personal
          personalTotal={personalTotal}
          updatePersonal={setPersonalTotal}
        />
        <Entertainment
          entertainmentTotal={entertainmentTotal}
          updateEntertainment={setEntertainmentTotal}
        />
        <Transport
          transportTotal={transportTotal}
          updateTransport={setTransportTotal}
        />
        <Children
          childrenTotal={childrenTotal}
          updateChildren={setChildrenTotal}
        />
        <Summary
          childrenTotal={childrenTotal}
          transportTotal={transportTotal}
          entertainmentTotal={entertainmentTotal}
          personalTotal={personalTotal}
          groceriesTotal={groceriesTotal}
          insuranceTotal={insuranceTotal}
          homeTotal={homeTotal}
          incomeTotal={incomeTotal}
        />
      </div>
    </div>
  );
}

export default App;
