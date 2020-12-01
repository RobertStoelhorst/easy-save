import React from 'react';
import { Header } from './Header';
import Autosave from './Autosave';
import { Planner } from './Planner';
import { Summary } from './Summary';

function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <h1>App</h1>
        <Header />
        <Autosave />
        <Planner />
        <Summary />
      </div>
    </div>
  );
};

export default App;
