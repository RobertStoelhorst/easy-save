import React, { useState, useRef } from "react";
import ChevronArrow from "../components/ChevronArrow";
import ChevronCircle from "../components/ChevronCircle";
import CurrencyFormat from "react-currency-format";

export const Personal = (props) => {
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

  const [cosmeticsExpense, setCosmeticsExpense] = useState(0); // array destructuring
  const [cosmeticsPeriod, setCosmeticsPeriod] = useState(52);
  const [hairExpense, setHairExpense] = useState(0);
  const [hairPeriod, setHairPeriod] = useState(52);
  const [medicineExpense, setMedicineExpense] = useState(0);
  const [medicinePeriod, setMedicinePeriod] = useState(52);
  const [glassesExpense, setGlassesExpense] = useState(0);
  const [glassesPeriod, setGlassesPeriod] = useState(52);
  const [dentalExpense, setDentalExpense] = useState(0);
  const [dentalPeriod, setDentalPeriod] = useState(52);
  const [doctorExpense, setDoctorExpense] = useState(0);
  const [doctorPeriod, setDoctorPeriod] = useState(52);
  const [hobbieExpense, setHobbieExpense] = useState(0);
  const [hobbiePeriod, setHobbiePeriod] = useState(52);
  const [clothingExpense, setClothingExpense] = useState(0);
  const [clothingPeriod, setClothingPeriod] = useState(52);
  const [jewellExpense, setJewellExpense] = useState(0);
  const [jewellPeriod, setJewellPeriod] = useState(52);
  const [computerExpense, setComputerExpense] = useState(0);
  const [computerPeriod, setComputerPeriod] = useState(52);
  const [sportExpense, setSportExpense] = useState(0);
  const [sportPeriod, setSportPeriod] = useState(52);
  const [educationExpense, setEducationExpense] = useState(0);
  const [educationPeriod, setEducationPeriod] = useState(52);
  const [petExpense, setPetExpense] = useState(0);
  const [petPeriod, setPetPeriod] = useState(52);
  const [otherExpense, setOtherExpense] = useState(0);
  const [otherPeriod, setOtherPeriod] = useState(52);

  const calculateTotal = () =>
    Number(cosmeticsExpense * cosmeticsPeriod) +
    Number(hairExpense * hairPeriod) +
    Number(medicineExpense * medicinePeriod) +
    Number(glassesExpense * glassesPeriod) +
    Number(dentalExpense * dentalPeriod) +
    Number(doctorExpense * doctorPeriod) +
    Number(hobbieExpense * hobbiePeriod) +
    Number(clothingExpense * clothingPeriod) +
    Number(jewellExpense * jewellPeriod) +
    Number(computerExpense * computerPeriod) +
    Number(sportExpense * sportPeriod) +
    Number(educationExpense * educationPeriod) +
    Number(petExpense * petPeriod) +
    Number(otherExpense * otherPeriod);

  props.updatePersonal(calculateTotal());

  return (
    <div className="">
      <div className="accordion-section">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <ChevronCircle
            className={"accordion-icon"}
            width={13}
            fill={"#coc6e2"}
          />
          <p className="accordion-title">Personal & medical</p>
          <CurrencyFormat
            value={-props.personalTotal}
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
              <label htmlFor="text">Cosmetiics & toiletries</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setCosmeticsExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setCosmeticsPeriod(e.target.value)}
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
              <label htmlFor="text">Hair & Beauty</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setHairExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setHairPeriod(e.target.value)}
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
              <label htmlFor="text">Maedicines & pharmacy</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setMedicineExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setMedicinePeriod(e.target.value)}
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
              <label htmlFor="text">Glasses & eye care</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setGlassesExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setGlassesPeriod(e.target.value)}
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
              <label htmlFor="text">Dental</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setDentalExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setDentalPeriod(e.target.value)}
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
              <label htmlFor="text">Doctors & medical</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setDoctorExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setDoctorPeriod(e.target.value)}
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
              <label htmlFor="text">Hobbies</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setHobbieExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setHobbiePeriod(e.target.value)}
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
              <label htmlFor="text">Clothing & shoes</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setClothingExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setClothingPeriod(e.target.value)}
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
              <label htmlFor="text">Jewellery & accessories</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setJewellExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setJewellPeriod(e.target.value)}
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
              <label htmlFor="text">Computers & gadgets</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setComputerExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setComputerPeriod(e.target.value)}
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
              <label htmlFor="text">Sports & gym</label>
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
              <label htmlFor="text">Education</label>
              <input
                className="input-field"
                type="text"
                onChange={(e) => setEducationExpense(e.target.value)}
                placeholder="$0"
              />
              <select
                onChange={(e) => setEducationPeriod(e.target.value)}
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
              <label htmlFor="text">Pet care & vet</label>
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
