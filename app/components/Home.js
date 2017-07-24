import React, { Component } from 'react';
import Scroll from 'react-scroll';
import styles from './../styles/home.css';

const Element = Scroll.Element;

function Home() {
  return (
    <Element name="home" className={styles.home + " element"}>
        <div className={styles.homeText}>
          <h1>YOU MAKE.<br/>WE CAN &amp; LABEL.</h1>
          <p>We at Magpie love beverages. In fact, we drink them every day. We love them so much that we decided to start canning and labeling delicious brews and carbonated beverages throughout the Greater Philadelphia Area at the location of the creators choosing.</p>
        </div>
    </Element>
  );
}

export default Home;