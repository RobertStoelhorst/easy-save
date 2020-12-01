import React, { useState } from 'react';
import Summary from '../components/Summary';

export const Planner = (props) => {
  console.log("this is props", props);
  const [text, setText] = useState ('');
  const [yourIncome, setYourIncome] = useState(0); // array destructuring
  const [yourPeriod, setYourPeriod] = useState(52)
  const [partnerIncome, setPartnerIncome] = useState(0);
  const [partnerPeriod, setPartnerPeriod] = useState(52);
  const [bonusIncome, setBonusIncome] = useState(0);
  const [bonusPeriod, setBonusPeriod] = useState(52);
  const [savingsIncome, setSavingsIncome] = useState(0);
  const [savingsPeriod, setSavingsPeriod] = useState(52);
  const [centerlinkIncome, setCenterlinkIncome] = useState(0);
  const [centerlinkPeriod, setCenterlinkPeriod] = useState(52);
  const [familyIncome, setFamilyIncome] = useState(0);
  const [familyPeriod, setFamilyPeriod] = useState(52);
  const [childSupportIncome, setChildSupportIncome] = useState(0);
  const [childSupportPeriod, setChildSupportPeriod] = useState(52);
  const [otherIncome, setOtherIncome] = useState(0);
  const [otherPeriod, setOtherPeriod] = useState(52);

  const calculateTotal = () => (
     Number(yourIncome * yourPeriod) + Number(partnerIncome * partnerPeriod) + Number(bonusIncome * bonusPeriod) + Number(savingsIncome * savingsPeriod) + Number(centerlinkIncome * centerlinkPeriod) + Number(familyIncome * familyPeriod) + Number(childSupportIncome * childSupportPeriod) + Number(otherIncome * otherPeriod)
   );

   props.updateIncome(calculateTotal());

   let [summaryTotal, setIncomeTotalState] = useState(props.incomeTotal)
   console.log("this is state total", summaryTotal);

   console.log("This is the incomeTotal", props.incomeTotal);
   console.log("This is a test on dividing incomeTotal", props.incomeTotal / 2);
   console.log("This is yourIncome", yourIncome);


  return (
    <div className="form-wrapper">
      <div className="planner">
        <div className="income">
          <p className="result">${props.incomeTotal} </p>
        </div>
          <form>
            <div className="category">
            <label htmlFor="text">Your take-home pay</label>
              <input className="input-field" type="text" onChange={ (e) => setYourIncome(e.target.value)} placeholder="$0" />
              <select onChange={ (e) => setYourPeriod(e.target.value)} className="periodList" name="">
                <option value="52">Weekly</option>
                <option value="26">Fortnightly</option>
                <option value="12">Monthly</option>
                <option value="4">Quarterly</option>
                <option value="1">Annually</option>
              </select>
            </div>
            <div className="category">
            <label htmlFor="text">Your partner's take-home pay</label>
              <input className="input-field" type="text" onChange={ (e) => setPartnerIncome(e.target.value)} placeholder="$0" />
              <select onChange={ (e) => setPartnerPeriod(e.target.value)} className="period-list" name="">
                <option value="52">Weekly</option>
                <option value="26">Fortnightly</option>
                <option value="12">Monthly</option>
                <option value="4">Quarterly</option>
                <option value="1">Annually</option>
              </select>
            </div>
            <div className="category">
            <label htmlFor="text">Bonuses & overtime</label>
              <input className="input-field" type="text" onChange={ (e) => setBonusIncome(e.target.value)} placeholder="$0" />
              <select onChange={ (e) => setBonusPeriod(e.target.value)} className="period-list" name="">
                <option value="52">Weekly</option>
                <option value="26">Fortnightly</option>
                <option value="12">Monthly</option>
                <option value="4">Quarterly</option>
                <option value="1">Annually</option>
              </select>
            </div>
            <div className="category">
            <label htmlFor="text">Income from savings & investments</label>
              <input className="input-field" type="text" onChange={ (e) => setSavingsIncome(e.target.value)} placeholder="$0" />
              <select onChange={ (e) => setSavingsPeriod(e.target.value)} className="period-list" name="">
                <option value="52">Weekly</option>
                <option value="26">Fortnightly</option>
                <option value="12">Monthly</option>
                <option value="4">Quarterly</option>
                <option value="1">Annually</option>
              </select>
            </div>
            <div className="category">
            <label htmlFor="text">Centerlink benefits</label>
              <input className="input-field" type="text" onChange={ (e) => setCenterlinkIncome(e.target.value)} placeholder="$0" />
              <select onChange={ (e) => setCenterlinkPeriod(e.target.value)} className="period-list" name="">
                <option value="52">Weekly</option>
                <option value="26">Fortnightly</option>
                <option value="12">Monthly</option>
                <option value="4">Quarterly</option>
                <option value="1">Annually</option>
              </select>
            </div>
            <div className="category">
            <label htmlFor="text">Family benefit payments</label>
              <input className="input-field" type="text" onChange={ (e) => setFamilyIncome(e.target.value)} placeholder="$0" />
              <select onChange={ (e) => setFamilyPeriod(e.target.value)} className="period-list" name="">
                <option value="52">Weekly</option>
                <option value="26">Fortnightly</option>
                <option value="12">Monthly</option>
                <option value="4">Quarterly</option>
                <option value="1">Annually</option>
              </select>
            </div>
            <div className="category">
            <label htmlFor="text">Child support</label>
              <input className="input-field" type="text" onChange={ (e) => setChildSupportIncome(e.target.value)} placeholder="$0" />
              <select onChange={ (e) => setChildSupportPeriod(e.target.value)} className="period-list" name="">
                <option value="52">Weekly</option>
                <option value="26">Fortnightly</option>
                <option value="12">Monthly</option>
                <option value="4">Quarterly</option>
                <option value="1">Annually</option>
              </select>
            </div>
            <div className="category">
            <label htmlFor="text">Other</label>
              <input className="input-field" type="text" onChange={ (e) => setOtherIncome(e.target.value)} placeholder="$0" />
              <select onChange={ (e) => setOtherPeriod(e.target.value)} className="period-list" name="">
                <option value="52">Weekly</option>
                <option value="26">Fortnightly</option>
                <option value="12">Monthly</option>
                <option value="4">Quarterly</option>
                <option value="1">Annually</option>
              </select>
            </div>

          </form>
        </div>
        <div className="expenses">
          <h4>Expenses</h4>
          <form action="">Expenses
            <div className="input-income">
              <input type="text" placeholder="$0" />
            </div>
          </form>
        </div>

      </div>
  );
}
