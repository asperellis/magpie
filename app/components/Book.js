import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Footer from './Footer';
import styles from './../styles/book.css';
import Calendar from './../images/Calendar';

const Element = Scroll.Element;

function Book() {
  return (
    <Element name="booking" className={styles.booking + " element"}>
        <section className={styles.bookingFormContainer}>
          <h1>BOOK US FOR A VISIT</h1>
          <p>HOURS: Monday-Friday 8:00AM-9:00PM<br/>
            <a href="tel:12679841644">(267) 984-1644</a>
          </p>
          <form id="bookingRequest" name="bookingRequest" action="" className={styles.bookingForm} method="POST">
            <fieldset>
              <input type="text" name="date" id="date" placeholder="DATE & TIME" />
              <Calendar fill="#fff" width="15" height="15" title={'Select A Date and Time'} className={styles.calendarIcon} />
            </fieldset>
            <fieldset>
              <select name="batch" id="batch">
                <option value="">BATCH SIZE</option>
                <option value="">10</option>
                <option value="">100</option>
                <option value="">1000</option>
              </select>
            </fieldset>
            <fieldset>
              <button type="submit" name="submit" id="submit">BOOK</button>
            </fieldset>
          </form>
        </section>
        <Footer />
    </Element>
  );
}

export default Book;