import React, { useState, useRef } from "react";
import ChevronArrow from "../components/ChevronArrow";
import ChevronCircle from "../components/ChevronCircle";
import CurrencyFormat from "react-currency-format";

export const Transport = (props) => {
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

  const [busExpense, setBusExpense] = useState(0); // array destructuring
  const [busPeriod, setBusPeriod] = useState(52);
  const [fuelExpense, setFuelExpense] = useState(0);
  const [fuelPeriod, setFuelPeriod] = useState(52);
  const [roadExpense, setRoadExpense] = useState(0);
  const [roadPeriod, setRoadPeriod] = useState(52);
  const [regoExpense, setRegoExpense] = useState(0);
  const [regoPeriod, setRegoPeriod] = useState(52);
  const [repairsExpense, setRepairsExpense] = useState(0);
  const [repairsPeriod, setRepairsPeriod] = useState(52);
  const [finesExpense, setFinesExpense] = useState(0);
  const [finesPeriod, setFinesPeriod] = useState(52);
  const [airfaresExpense, setAirfaresExpense] = useState(0);
  const [airfaresPeriod, setAirfaresPeriod] = useState(52);
  const [otherExpense, setOtherExpense] = useState(0);
  const [otherPeriod, setOtherPeriod] = useState(52);

  const calculateTotal = () =>
    Number(busExpense * busPeriod) +
    Number(fuelExpense * fuelPeriod) +
    Number(roadExpense * roadPeriod) +
    Number(regoExpense * regoPeriod) +
    Number(repairsExpense * repairsPeriod) +
    Number(finesExpense * finesPeriod) +
    Number(airfaresExpense * airfaresPeriod) +
    Number(otherExpense * otherPeriod);

  props.updateTransport(calculateTotal());

  return (
    <div className="">
      <div className="accordion-section">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <ChevronCircle
            className={"accordion-icon"}
            width={13}
            fill={"#c3eefa"}
          />
          <p className="accordion-title">Transport & auto</p>
          <CurrencyFormat
            value={-props.transportTotal}
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
              <label htmlFor="text">Bus, train & ferry</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setBusExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setBusPeriod(e.target.value)}
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
              <label htmlFor="text">Fuel</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setFuelExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setFuelPeriod(e.target.value)}
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
              <label htmlFor="text">Road tolls $ parking</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setRoadExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setRoadPeriod(e.target.value)}
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
              <label htmlFor="text">Rego & licence</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setRegoExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setRegoPeriod(e.target.value)}
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
              <label htmlFor="text">Repairs & maintenance</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setRepairsExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setRepairsPeriod(e.target.value)}
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
              <label htmlFor="text">Fines</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setFinesExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setFinesPeriod(e.target.value)}
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
              <label htmlFor="text">Airfares</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setAirfaresExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setAirfaresPeriod(e.target.value)}
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
