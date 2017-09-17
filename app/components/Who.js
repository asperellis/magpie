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
          <p>We are young Philadelphians with a vision to bring beer and other delicious beverages to a wider audience.  Lifelong friends who have always shared the passion to create and innovate. We’ve returned to the place the place that molded us together, Philadelphia, melding our expertise, exuberance, and friendship into a thriving company to partner with growing businesses.</p>
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