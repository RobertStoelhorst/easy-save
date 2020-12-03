import React, { useState, useRef } from 'react';
import ChevronArrow from '../components/ChevronArrow';
import ChevronCircle from '../components/ChevronCircle';
import CurrencyFormat from 'react-currency-format';

export const Insurance = (props) => {

  const CurrencyFormat = require('react-currency-format');

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion-icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
    setRotateState(setActive === "active" ? "accordion-icon" : "accordion-icon rotate");
    console.log(content.current.scrollHeight);
  }

  const [carExpense, setCarExpense] = useState(0); // array destructuring
  const [carPeriod, setCarPeriod] = useState(52);
  const [homeExpense, setHomeExpense] = useState(0);
  const [homePeriod, setHomePeriod] = useState(52);
  const [personalExpense, setPersonalExpense] = useState(0);
  const [personalPeriod, setPersonalPeriod] = useState(52);
  const [healthExpense, setHealthExpense] = useState(0);
  const [healthPeriod, setHealthPeriod] = useState(52);
  const [carLoanExpense, setCarLoanExpense] = useState(0);
  const [carLoanPeriod, setCarLoanPeriod] = useState(52);
  const [creditExpense, setCreditExpense] = useState(0);
  const [creditPeriod, setCreditPeriod] = useState(52);
  const [loansExpense, setLoansExpense] = useState(0);
  const [loansPeriod, setLoansPeriod] = useState(52);
  const [debtExpense, setDebtExpense] = useState(0);
  const [debtPeriod, setDebtPeriod] = useState(52);
  const [savingsExpense, setSavingsExpense] = useState(0);
  const [savingsPeriod, setSavingsPeriod] = useState(52);
  const [investmentsExpense, setInvestmentsExpense] = useState(0);
  const [investmentsPeriod, setInvestmentsPeriod] = useState(52);
  const [charityExpense, setCharityExpense] = useState(0);
  const [charityPeriod, setCharityPeriod] = useState(52);
  const [otherExpense, setOtherExpense] = useState(0);
  const [otherPeriod, setOtherPeriod] = useState(52);

  const calculateTotal = () => (
    Number(carExpense * carPeriod) + Number(homeExpense * homePeriod) + Number(personalExpense * personalPeriod) + Number(healthExpense * healthPeriod) + Number(carLoanExpense * carLoanPeriod) + Number(creditExpense * creditPeriod) + Number(loansExpense * loansPeriod) + Number(debtExpense * debtPeriod) + Number(savingsExpense * savingsPeriod) + Number(investmentsExpense * investmentsPeriod) + Number(charityExpense * charityPeriod) + Number(otherExpense * otherPeriod)
  );

  props.updateInsurance(calculateTotal());

  return (
    <div className="">
        <div className="accordion-section">
          <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
            <ChevronCircle className={"accordion-icon"} width={13} fill={"#1f1247"} />
            <p className="accordion-title">Insurance & financial</p>
            <CurrencyFormat value={-props.insuranceTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div className="result">{value}</div>} />
            <ChevronArrow className={`${setRotate}`} width={20} fill={"#d3d1d9"} />
          </button>
        </div>

        <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion-content">
          <div className="accordion-container">
          <form>
            <div className="category">
              <label htmlFor="text">Car insurance</label>
                <input className="input-field" type="text" onChange={ (e) => setCarExpense(e.target.value) } placeholder="$0" />
                <select onChange={(e) => setCarPeriod(e.target.value)} className="period-list" name="" >
                  <option value="52">Weekly</option>
                  <option value="26">Fortnightly</option>
                  <option value="12">Monthly</option>
                  <option value="4">Quarterly</option>
                  <option value="1">Annually</option>
                </select>
            </div>
            <div className="category">
              <label htmlFor="text">Home & contents insurance</label>
                <input className="input-field" type="text" onChange={ (e) => setHomeExpense(e.target.value) } placeholder="$0" />
                <select onChange={(e) => setHomePeriod(e.target.value)} className="period-list" name="" >
                  <option value="52">Weekly</option>
                  <option value="26">Fortnightly</option>
                  <option value="12">Monthly</option>
                  <option value="4">Quarterly</option>
                  <option value="1">Annually</option>
                </select>
              </div>
              <div className="category">
                <label htmlFor="text">Personal & life insurance</label>
                  <input className="input-field" type="text" onChange={ (e) => setPersonalExpense(e.target.value) } placeholder="$0" />
                  <select onChange={(e) => setPersonalPeriod(e.target.value)} className="period-list" name="" >
                    <option value="52">Weekly</option>
                    <option value="26">Fortnightly</option>
                    <option value="12">Monthly</option>
                    <option value="4">Quarterly</option>
                    <option value="1">Annually</option>
                  </select>
                </div>
              <div className="category">
                <label htmlFor="text">Health insurance</label>
                  <input className="input-field" type="text" onChange={ (e) => setHealthExpense(e.target.value) } placeholder="$0" />
                  <select onChange={(e) => setHealthPeriod(e.target.value)} className="period-list" name="" >
                    <option value="52">Weekly</option>
                    <option value="26">Fortnightly</option>
                    <option value="12">Monthly</option>
                    <option value="4">Quarterly</option>
                    <option value="1">Annually</option>
                  </select>
                </div>
              <div className="category">
                <label htmlFor="text">Car loan</label>
                  <input className="input-field" type="text" onChange={ (e) => setCarLoanExpense(e.target.value) } placeholder="$0" />
                  <select onChange={(e) => setCarLoanPeriod(e.target.value)} className="period-list" name="" >
                    <option value="52">Weekly</option>
                    <option value="26">Fortnightly</option>
                    <option value="12">Monthly</option>
                    <option value="4">Quarterly</option>
                    <option value="1">Annually</option>
                  </select>
                </div>
              <div className="category">
                <label htmlFor="text">Credit card interest</label>
                  <input className="input-field" type="text" onChange={ (e) => setCreditExpense(e.target.value) } placeholder="$0" />
                  <select onChange={(e) => setCreditPeriod(e.target.value)} className="period-list" name="" >
                    <option value="52">Weekly</option>
                    <option value="26">Fortnightly</option>
                    <option value="12">Monthly</option>
                    <option value="4">Quarterly</option>
                    <option value="1">Annually</option>
                  </select>
                </div>
              <div className="category">
                <label htmlFor="text">Other loans</label>
                  <input className="input-field" type="text" onChange={ (e) => setLoansExpense(e.target.value) } placeholder="$0" />
                  <select onChange={(e) => setLoansPeriod(e.target.value)} className="period-list" name="" >
                    <option value="52">Weekly</option>
                    <option value="26">Fortnightly</option>
                    <option value="12">Monthly</option>
                    <option value="4">Quarterly</option>
                    <option value="1">Annually</option>
                  </select>
                </div>
              <div className="category">
                <label htmlFor="text">Paying off debt</label>
                  <input className="input-field" type="text" onChange={ (e) => setDebtExpense(e.target.value) } placeholder="$0" />
                  <select onChange={(e) => setDebtPeriod(e.target.value)} className="period-list" name="" >
                    <option value="52">Weekly</option>
                    <option value="26">Fortnightly</option>
                    <option value="12">Monthly</option>
                    <option value="4">Quarterly</option>
                    <option value="1">Annually</option>
                  </select>
                </div>
              <div className="category">
                <label htmlFor="text">Savings</label>
                  <input className="input-field" type="text" onChange={ (e) => setSavingsExpense(e.target.value) } placeholder="$0" />
                  <select onChange={(e) => setSavingsPeriod(e.target.value)} className="period-list" name="" >
                    <option value="52">Weekly</option>
                    <option value="26">Fortnightly</option>
                    <option value="12">Monthly</option>
                    <option value="4">Quarterly</option>
                    <option value="1">Annually</option>
                  </select>
                </div>
              <div className="category">
                <label htmlFor="text">investments & super contributions</label>
                  <input className="input-field" type="text" onChange={ (e) => setInvestmentsExpense(e.target.value) } placeholder="$0" />
                  <select onChange={(e) => setInvestmentsPeriod(e.target.value)} className="period-list" name="" >
                    <option value="52">Weekly</option>
                    <option value="26">Fortnightly</option>
                    <option value="12">Monthly</option>
                    <option value="4">Quarterly</option>
                    <option value="1">Annually</option>
                  </select>
                </div>
              <div className="category">
                <label htmlFor="text">Charity donations</label>
                  <input className="input-field" type="text" onChange={ (e) => setCharityExpense(e.target.value) } placeholder="$0" />
                  <select onChange={(e) => setCharityPeriod(e.target.value)} className="period-list" name="" >
                    <option value="52">Weekly</option>
                    <option value="26">Fortnightly</option>
                    <option value="12">Monthly</option>
                    <option value="4">Quarterly</option>
                    <option value="1">Annually</option>
                  </select>
                </div>
              <div className="category">
                <label htmlFor="text">Other</label>
                  <input className="input-field" type="text" onChange={ (e) => setOtherExpense(e.target.value) } placeholder="$0" />
                  <select onChange={(e) => setOtherPeriod(e.target.value)} className="period-list" name="" >
                    <option value="52">Weekly</option>
                    <option value="26">Fortnightly</option>
                    <option value="12">Monthly</option>
                    <option value="4">Quarterly</option>
                    <option value="1">Annually</option>
                  </select>
                </div>
            </form>
          </div>
        </div>
    </div>
  );
}
