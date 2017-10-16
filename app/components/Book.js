import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Footer from './Footer';
import styles from './../styles/book.css';
import Calendar from './../images/Calendar';

const Element = Scroll.Element;

function Book(props) {
  return (
    <Element name="booking" className={styles.booking + " element"}>
        <section className={styles.bookingFormContainer}>
          <h1>{props.wpContent.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: props.wpContent.description }}>
          </p>
          {<div className={styles.bookingForm} dangerouslySetInnerHTML={{ __html: props.wpContent.form }}></div>}
        </section>
        <Footer />
    </Element>
  );
}

export default Book;