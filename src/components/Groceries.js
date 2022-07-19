import React, { useState, useRef } from "react";
import ChevronArrow from "../components/ChevronArrow";
import ChevronCircle from "../components/ChevronCircle";
import CurrencyFormat from "react-currency-format";

export const Groceries = (props) => {
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

  const [supermarketExpense, setSupermarketExpense] = useState(0); // array destructuring
  const [supermarketPeriod, setSupermarketPeriod] = useState(52);
  const [butcherExpense, setButcherExpense] = useState(0);
  const [butcherPeriod, setButcherPeriod] = useState(52);
  const [fruitExpense, setFruitExpense] = useState(0);
  const [fruitPeriod, setFruitPeriod] = useState(52);
  const [fishExpense, setFishExpense] = useState(0);
  const [fishPeriod, setFishPeriod] = useState(52);
  const [deliExpense, setDeliExpense] = useState(0);
  const [deliPeriod, setDeliPeriod] = useState(52);
  const [petExpense, setPetExpense] = useState(0);
  const [petPeriod, setPetPeriod] = useState(52);
  const [otherExpense, setOtherExpense] = useState(0);
  const [otherPeriod, setOtherPeriod] = useState(52);

  const calculateTotal = () =>
    Number(supermarketExpense * supermarketPeriod) +
    Number(butcherExpense * butcherPeriod) +
    Number(fruitExpense * fruitPeriod) +
    Number(fishExpense * fishPeriod) +
    Number(deliExpense * deliPeriod) +
    Number(petExpense * petPeriod) +
    Number(otherExpense * otherPeriod);

  props.updateGroceries(calculateTotal());

  return (
    <div className="">
      <div className="accordion-section">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <ChevronCircle
            className={"accordion-icon"}
            width={13}
            fill={"#383a7b"}
          />
          <p className="accordion-title">Groceries</p>
          <CurrencyFormat
            value={-props.groceriesTotal}
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
              <label htmlFor="text">Supermarket</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setSupermarketExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setSupermarketPeriod(e.target.value)}
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
              <label htmlFor="text">Butcher</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setButcherExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setButcherPeriod(e.target.value)}
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
              <label htmlFor="text">Fruit & veg market</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setFruitExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setFruitPeriod(e.target.value)}
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
              <label htmlFor="text">Fish shop</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setFishExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setFishPeriod(e.target.value)}
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
              <label htmlFor="text">Deli & bakery</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setDeliExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setDeliPeriod(e.target.value)}
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
              <label htmlFor="text">Pet food</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setPetExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setPetPeriod(e.target.value)}
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
