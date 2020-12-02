import React, { useState } from 'react';
import { Header } from './Header';
import Autosave from './Autosave';
import { Income } from './Income';
import { Summary } from './Summary';
import { HomeUtils } from './Homeutils';
import { Insurance } from './Insurance';
import { Groceries } from './Groceries';
import { Personal } from './Personal';
import { Entertainment } from './Entertainment';
import { Transport } from './Transport';
import { Children } from './Children';

function App() {

const [incomeTotal, setIncomeTotal] = useState(0);

  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <Autosave />
        <Income incomeTotal={incomeTotal} updateIncome={setIncomeTotal} />
        <HomeUtils />
        <Insurance />
        <Groceries />
        <Personal />
        <Entertainment />
        <Transport />
        <Children />
        <Summary incomeTotal={incomeTotal} />
      </div>
    </div>
  );
};

export default App;
