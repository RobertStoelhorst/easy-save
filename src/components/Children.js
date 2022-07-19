import React, { useState, useRef } from "react";
import ChevronArrow from "../components/ChevronArrow";
import ChevronCircle from "../components/ChevronCircle";
import CurrencyFormat from "react-currency-format";

export const Children = (props) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion-icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion-icon" : "accordion-icon rotate"
    );
    console.log(content.current.scrollHeight);
  }

  const [babyExpense, setBabyExpense] = useState(0); // array destructuring
  const [babyPeriod, setBabyPeriod] = useState(52);
  const [toysExpense, setToysExpense] = useState(0);
  const [toysPeriod, setToysPeriod] = useState(52);
  const [babysittingExpense, setBabysittingExpense] = useState(0);
  const [babysittingPeriod, setBabysittingPeriod] = useState(52);
  const [childcareExpense, setChildcareExpense] = useState(0);
  const [childcarePeriod, setChildcarePeriod] = useState(52);
  const [sportExpense, setSportExpense] = useState(0);
  const [sportPeriod, setSportPeriod] = useState(52);
  const [schoolExpense, setSchoolExpense] = useState(0);
  const [schoolPeriod, setSchoolPeriod] = useState(52);
  const [excursionsExpense, setExcursionsExpense] = useState(0);
  const [excursionsPeriod, setExcursionsPeriod] = useState(52);
  const [uniformExpense, setUniformExpense] = useState(0);
  const [uniformPeriod, setUniformPeriod] = useState(52);
  const [otherSchoolExpense, setOtherSchoolExpense] = useState(0);
  const [otherSchoolPeriod, setOtherSchoolPeriod] = useState(52);
  const [supportExpense, setSupportExpense] = useState(0);
  const [supportPeriod, setSupportPeriod] = useState(52);
  const [otherExpense, setOtherExpense] = useState(0);
  const [otherPeriod, setOtherPeriod] = useState(52);

  const calculateTotal = () =>
    Number(babyExpense * babyPeriod) +
    Number(toysExpense * toysPeriod) +
    Number(babysittingExpense * babysittingPeriod) +
    Number(childcareExpense * childcarePeriod) +
    Number(sportExpense * sportPeriod) +
    Number(schoolExpense * schoolPeriod) +
    Number(excursionsExpense * excursionsPeriod) +
    Number(uniformExpense * uniformPeriod) +
    Number(otherSchoolExpense * otherSchoolPeriod) +
    Number(supportExpense * supportPeriod) +
    Number(otherExpense * otherPeriod);

  props.updateChildren(calculateTotal());

  return (
    <div className="">
      <div className="accordion-section">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <ChevronCircle
            className={"accordion-icon"}
            width={13}
            fill={"#a3bbf9"}
          />
          <p className="accordion-title">Children</p>
          <CurrencyFormat
            value={-props.childrenTotal}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            renderText={(value) => <div className="result">{value}</div>}
          />
          <ChevronArrow
            className={`${setRotate}`}
            width={20}
            fill={"#d3d1d9"}
          />
        </button>
      </div>

      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion-content"
      >
        <div className="accordion-container">
          <form>
            <div className="category">
              <label htmlFor="text">Baby products</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setBabyExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setBabyPeriod(e.target.value)}
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
            <div className="category">
              <label htmlFor="text">Toys</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setToysExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setToysPeriod(e.target.value)}
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
            <div className="category">
              <label htmlFor="text">Babysitting</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setBabysittingExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setBabysittingPeriod(e.target.value)}
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
            <div className="category">
              <label htmlFor="text">Childcare</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setChildcareExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setChildcarePeriod(e.target.value)}
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
            <div className="category">
              <label htmlFor="text">Sports & activities</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setSportExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setSportPeriod(e.target.value)}
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
            <div className="category">
              <label htmlFor="text">School fees</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setSchoolExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setSchoolPeriod(e.target.value)}
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
            <div className="category">
              <label htmlFor="text">Excursions</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setExcursionsExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setExcursionsPeriod(e.target.value)}
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
            <div className="category">
              <label htmlFor="text">School uniforms</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setUniformExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setUniformPeriod(e.target.value)}
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
            <div className="category">
              <label htmlFor="text">Other school needs</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setOtherSchoolExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setOtherSchoolPeriod(e.target.value)}
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
            <div className="category">
              <label htmlFor="text">Child support payment</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setSupportExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setSupportPeriod(e.target.value)}
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
            <div className="category">
              <label htmlFor="text">Other</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setOtherExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setOtherPeriod(e.target.value)}
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
          </form>
        </div>
      </div>
    </div>
  );
};
