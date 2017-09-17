import React, { Component } from 'react';
import Scroll from 'react-scroll';
import styles from './../styles/home.css';
const Link = Scroll.Link;
const Element = Scroll.Element;

function Home() {
  return (
    <Element name="home" className={styles.home + " element"}>
        <div className={styles.homeText}>
          <h1>YOU BREW IT.<br/>WE CAN IT.</h1>
          <p>We at Magpie love beverages. In fact, we drink them every day.  We love them so much that we decided to start canning and labeling delicious brews and carbonated beverages throughout the Greater Philadelphia Area at the location of the creators choosing.</p>
          <Link className={styles.btn} type="button" to="booking" spy={true} smooth={true} duration={500} offset={0} isDynamic={true}>
            BOOK US FOR A RUN
          </Link>
        </div>
    </Element>
  );
}

export default Home;