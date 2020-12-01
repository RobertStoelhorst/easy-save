import React, { useState } from 'react';
import { Header } from './Header';
import Autosave from './Autosave';
import { Planner } from './Planner';
import { Summary } from './Summary';

function App() {

const [incomeTotal, setIncomeTotal] = useState(0);

  return (
    <div className="container">
      <div className="app-wrapper">
        <h1>App</h1>
        <Header />
        <Autosave />
        <Planner incomeTotal={incomeTotal} updateIncome={setIncomeTotal} />
        <Summary incomeTotal={incomeTotal} />
      </div>
    </div>
  );
};

export default App;
