import React, { Component } from 'react';
import Scroll from 'react-scroll';
import styles from './../styles/who.css';

const Element = Scroll.Element;

function Who() {
  return (
    <Element name="who" className={styles.who + " element elementSplit"}>
        <div className={styles.whoImg}></div>
        <div className={styles.whoText}>
          <h1>WHO WE ARE</h1>
          <p>We are young lads with Philadelphia roots hoping to expand the reach of high quality Philly beverages</p>
          <p>
            <span className="bold">Jason Besecker</span><br/>
            Founder/CEO</p>
          <p><span className="bold">Mac Ferrick</span><br/>
          Founder/CMO</p>
        </div>
    </Element>
  );
}

export default Who;