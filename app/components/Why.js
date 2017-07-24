import React, { Component } from 'react';
import Scroll from 'react-scroll';
import styles from './../styles/why.css';

const Element = Scroll.Element;

function Why() {
  return (
    <Element name="why" className={styles.why + " element elementSplit"}>
        <div className={styles.whyImg}></div>
        <div className={styles.whyText}>
          <h1>WHY CANS</h1>
          <ul className={styles.whyList}>
            <li><span className="bold">Better durability:</span> Transportation and lower risk of mess</li>
            <li><span className="bold">Less exposure to light:</span> Prevents beer from ‘skunking’</li>
            <li><span className="bold">Holds oxygen level:</span> Fresher for longer</li>
            <li><span className="bold">Minimal carbon footprint:</span> ~60% recyclable</li>
          </ul>
        </div>
    </Element>
  );
}

export default Why;