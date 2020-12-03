import React, { useState, useRef } from 'react';
import ChevronArrow from '../components/ChevronArrow';
import ChevronCircle from '../components/ChevronCircle';
import CurrencyFormat from 'react-currency-format';

export const Entertainment = (props) => {

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

  const [coffeeExpense, setCoffeeExpense] = useState(0); // array destructuring
  const [coffeePeriod, setCoffeePeriod] = useState(52);
  const [lunchesExpense, setLunchesExpense] = useState(0);
  const [lunshesPeriod, setLunchesPeriod] = useState(52);
  const [snackExpense, setSnackExpense] = useState(0);
  const [snackPeriod, setSnackPeriod] = useState(52);
  const [cigaretteExpense, setCigaretteExpense] = useState(0);
  const [cigarettePeriod, setCigarettePeriod] = useState(52);
  const [drinkExpense, setDrinkExpense] = useState(0);
  const [drinkPeriod, setDrinkPeriod] = useState(52);
  const [barExpense, setBarExpense] = useState(0);
  const [barPeriod, setBarPeriod] = useState(52);
  const [restaurantExpense, setRestaurantExpense] = useState(0);
  const [restaurantPeriod, setRestaurantPeriod] = useState(52);
  const [bookExpense, setBookExpense] = useState(0);
  const [bookPeriod, setBookPeriod] = useState(52);
  const [newsExpense, setNewsExpense] = useState(0);
  const [newsPeriod, setNewsPeriod] = useState(52);
  const [moviesExpense, setMoviesExpense] = useState(0);
  const [moviesPeriod, setMoviesPeriod] = useState(52);
  const [holidayExpense, setHolidayExpense] = useState(0);
  const [holidayPeriod, setHolidayPeriod] = useState(52);
  const [giftExpense, setGiftExpense] = useState(0);
  const [giftPeriod, setGiftPeriod] = useState(52);
  const [otherExpense, setOtherExpense] = useState(0);
  const [otherPeriod, setOtherPeriod] = useState(52);

  const calculateTotal = () => (
    Number(coffeeExpense * coffeePeriod) + Number(lunchesExpense * lunshesPeriod) + Number(snackExpense * snackPeriod) + Number(cigaretteExpense * cigarettePeriod) + Number(drinkExpense * drinkPeriod) + Number(barExpense * barPeriod) + Number(restaurantExpense * restaurantPeriod) + Number(bookExpense * bookPeriod) + Number(newsExpense * newsPeriod) + Number(moviesExpense * moviesPeriod) + Number(holidayExpense * holidayPeriod) + Number(giftExpense * giftPeriod) + Number(otherExpense * otherPeriod)
  );

  props.updateEntertainment(calculateTotal());

  return (
    <div className="">
        <div className="accordion-section">
          <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
            <ChevronCircle className={"accordion-icon"} width={13} fill={"#ace8fa"} />
            <p className="accordion-title">Entertainment & eat-out</p>
              <CurrencyFormat value={-props.entertainmentTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div className="result">{value}</div>} />
            <ChevronArrow className={`${setRotate}`} width={20} fill={"#d3d1d9"} />
          </button>
        </div>

        <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion-content">
          <div className="accordion-container">
          <form>
            <div className="category">
              <label htmlFor="text">Coffee & tea</label>
                <input className="input-field" type="text" onChange={ (e) => setCoffeeExpense(e.target.value) } placeholder="$0" />
                <select onChange={(e) => setCoffeePeriod(e.target.value)} className="period-list" name="" >
                  <option value="52">Weekly</option>
                  <option value="26">Fortnightly</option>
                  <option value="12">Monthly</option>
                  <option value="4">Quarterly</option>
                  <option value="1">Annually</option>
                </select>
            </div>
            <div className="category">
              <label htmlFor="text">Lunches-bought</label>
                <input className="input-field" type="text" onChange={ (e) => setLunchesExpense(e.target.value) } placeholder="$0" />
                <select onChange={(e) => setLunchesPeriod(e.target.value)} className="period-list" name="" >
                  <option value="52">Weekly</option>
                  <option value="26">Fortnightly</option>
                  <option value="12">Monthly</option>
                  <option value="4">Quarterly</option>
                  <option value="1">Annually</option>
                </select>
              </div>
              <div className="category">
                <label htmlFor="text">Take-away & snacks</label>
                  <input className="input-field" type="text" onChange={ (e) => setSnackExpense(e.target.value) } placeholder="$0" />
                  <select onChange={(e) => setSnackPeriod(e.target.value)} className="period-list" name="" >
                    <option value="52">Weekly</option>
                    <option value="26">Fortnightly</option>
                    <option value="12">Monthly</option>
                    <option value="4">Quarterly</option>
                    <option value="1">Annually</option>
                  </select>
                </div>
              <div className="category">
                <label htmlFor="text">Cigarettes</label>
                  <input className="input-field" type="text" onChange={ (e) => setCigaretteExpense(e.target.value) } placeholder="$0" />
                  <select onChange={(e) => setCigarettePeriod(e.target.value)} className="period-list" name="" >
                    <option value="52">Weekly</option>
                    <option value="26">Fortnightly</option>
                    <option value="12">Monthly</option>
                    <option value="4">Quarterly</option>
                    <option value="1">Annually</option>
                  </select>
                </div>
              <div className="category">
                <label htmlFor="text">Drinks & alcohol</label>
                  <input className="input-field" type="text" onChange={ (e) => setDrinkExpense(e.target.value) } placeholder="$0" />
                  <select onChange={(e) => setDrinkPeriod(e.target.value)} className="period-list" name="" >
                    <option value="52">Weekly</option>
                    <option value="26">Fortnightly</option>
                    <option value="12">Monthly</option>
                    <option value="4">Quarterly</option>
                    <option value="1">Annually</option>
                  </select>
                </div>
              <div className="category">
                <label htmlFor="text">Bars & clubs</label>
                  <input className="input-field" type="text" onChange={ (e) => setBarExpense(e.target.value) } placeholder="$0" />
                  <select onChange={(e) => setBarPeriod(e.target.value)} className="period-list" name="" >
                    <option value="52">Weekly</option>
                    <option value="26">Fortnightly</option>
                    <option value="12">Monthly</option>
                    <option value="4">Quarterly</option>
                    <option value="1">Annually</option>
                  </select>
                </div>
              <div className="category">
                <label htmlFor="text">Restaurants</label>
                  <input className="input-field" type="text" onChange={ (e) => setRestaurantExpense(e.target.value) } placeholder="$0" />
                  <select onChange={(e) => setRestaurantPeriod(e.target.value)} className="period-list" name="" >
                    <option value="52">Weekly</option>
                    <option value="26">Fortnightly</option>
                    <option value="12">Monthly</option>
                    <option value="4">Quarterly</option>
                    <option value="1">Annually</option>
                  </select>
                </div>
              <div className="category">
                <label htmlFor="text">Books</label>
                  <input className="input-field" type="text" onChange={ (e) => setBookExpense(e.target.value) } placeholder="$0" />
                  <select onChange={(e) => setBookPeriod(e.target.value)} className="period-list" name="" >
                    <option value="52">Weekly</option>
                    <option value="26">Fortnightly</option>
                    <option value="12">Monthly</option>
                    <option value="4">Quarterly</option>
                    <option value="1">Annually</option>
                  </select>
                </div>
              <div className="category">
                <label htmlFor="text">Newspaper & magazines</label>
                  <input className="input-field" type="text" onChange={ (e) => setNewsExpense(e.target.value) } placeholder="$0" />
                  <select onChange={(e) => setNewsPeriod(e.target.value)} className="period-list" name="" >
                    <option value="52">Weekly</option>
                    <option value="26">Fortnightly</option>
                    <option value="12">Monthly</option>
                    <option value="4">Quarterly</option>
                    <option value="1">Annually</option>
                  </select>
                </div>
              <div className="category">
                <label htmlFor="text">Movies & music</label>
                  <input className="input-field" type="text" onChange={ (e) => setMoviesExpense(e.target.value) } placeholder="$0" />
                  <select onChange={(e) => setMoviesPeriod(e.target.value)} className="period-list" name="" >
                    <option value="52">Weekly</option>
                    <option value="26">Fortnightly</option>
                    <option value="12">Monthly</option>
                    <option value="4">Quarterly</option>
                    <option value="1">Annually</option>
                  </select>
                </div>
              <div className="category">
                <label htmlFor="text">Holidays</label>
                  <input className="input-field" type="text" onChange={ (e) => setHolidayExpense(e.target.value) } placeholder="$0" />
                  <select onChange={(e) => setHolidayPeriod(e.target.value)} className="period-list" name="" >
                    <option value="52">Weekly</option>
                    <option value="26">Fortnightly</option>
                    <option value="12">Monthly</option>
                    <option value="4">Quarterly</option>
                    <option value="1">Annually</option>
                  </select>
                </div>
              <div className="category">
                <label htmlFor="text">Celebrations & gifts</label>
                  <input className="input-field" type="text" onChange={ (e) => setGiftExpense(e.target.value) } placeholder="$0" />
                  <select onChange={(e) => setGiftPeriod(e.target.value)} className="period-list" name="" >
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
