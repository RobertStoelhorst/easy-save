import React, { useState, useRef } from "react";
import ChevronArrow from "../components/ChevronArrow";
import ChevronCircle from "../components/ChevronCircle";
import CurrencyFormat from "react-currency-format";

export const HomeUtils = (props) => {
  console.log("this is props", props);

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

  const [mortgageExpense, setMortgageExpense] = useState(0); // array destructuring
  const [mortgagePeriod, setMortgagePeriod] = useState(52);
  const [bodyCorpExpense, setBodyCorpExpense] = useState(0);
  const [bodyCorpPeriod, setBodyCorpPeriod] = useState(52);
  const [councilExpense, setCouncilExpense] = useState(0);
  const [councilPeriod, setCouncilPeriod] = useState(52);
  const [furnitureExpense, setFurnitureExpense] = useState(0);
  const [furniturePeriod, setFurniturePeriod] = useState(52);
  const [renovationExpense, setRenovationExpense] = useState(0);
  const [renovationPeriod, setRenovationPeriod] = useState(52);
  const [electricityExpense, setElectricityExpense] = useState(0);
  const [electricityPeriod, setElectricityPeriod] = useState(52);
  const [gasExpense, setGasExpense] = useState(0);
  const [gasPeriod, setGasPeriod] = useState(52);
  const [waterExpense, setWaterExpense] = useState(0);
  const [waterPeriod, setWaterPeriod] = useState(52);
  const [internetExpense, setInternetExpense] = useState(0);
  const [internetPeriod, setInternetPeriod] = useState(52);
  const [payTVExpense, setPayTVExpense] = useState(0);
  const [payTVPeriod, setPayTVPeriod] = useState(52);
  const [phoneExpense, setPhoneExpense] = useState(0);
  const [phonePeriod, setPhonePeriod] = useState(52);
  const [mobileExpense, setMobileExpense] = useState(0);
  const [mobilePeriod, setMobilePeriod] = useState(52);
  const [otherExpense, setOtherExpense] = useState(0);
  const [otherPeriod, setOtherPeriod] = useState(52);

  const calculateTotal = () =>
    Number(mortgageExpense * mortgagePeriod) +
    Number(bodyCorpExpense * bodyCorpPeriod) +
    Number(councilExpense * councilPeriod) +
    Number(furnitureExpense * furniturePeriod) +
    Number(renovationExpense * renovationPeriod) +
    Number(electricityExpense * electricityPeriod) +
    Number(gasExpense * gasPeriod) +
    Number(waterExpense * waterPeriod) +
    Number(internetExpense * internetPeriod) +
    Number(payTVExpense * payTVPeriod) +
    Number(phoneExpense * phonePeriod) +
    Number(mobileExpense * mobilePeriod) +
    Number(otherExpense * otherPeriod);

  props.updateHome(calculateTotal());

  return (
    <div className="">
      <div className="accordion-section">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <ChevronCircle
            className={"accordion-icon"}
            width={13}
            fill={"#0146f5"}
          />
          <p className="accordion-title">Home & utilities</p>
          <CurrencyFormat
            value={-props.homeTotal}
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
              <label htmlFor="text">Mortgage & rent</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setMortgageExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setMortgagePeriod(e.target.value)}
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
              <label htmlFor="text">Body corporate fees</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setBodyCorpExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setBodyCorpPeriod(e.target.value)}
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
              <label htmlFor="text">Council rates</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setCouncilExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setCouncilPeriod(e.target.value)}
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
              <label htmlFor="text">Furniture & appliances</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setFurnitureExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setFurniturePeriod(e.target.value)}
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
              <label htmlFor="text">Renovations & maintenance</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setRenovationExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setRenovationPeriod(e.target.value)}
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
              <label htmlFor="text">Electricity</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setElectricityExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setElectricityPeriod(e.target.value)}
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
              <label htmlFor="text">Gas</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setGasExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setGasPeriod(e.target.value)}
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
              <label htmlFor="text">Water</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setWaterExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setWaterPeriod(e.target.value)}
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
              <label htmlFor="text">Internet</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setInternetExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setInternetPeriod(e.target.value)}
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
              <label htmlFor="text">Pay TV</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setPayTVExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setPayTVPeriod(e.target.value)}
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
              <label htmlFor="text">Home phone</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setPhoneExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setPhonePeriod(e.target.value)}
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
              <label htmlFor="text">Mobile</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setMobileExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setMobilePeriod(e.target.value)}
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
