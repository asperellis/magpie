import React, { Component } from 'react';
import Scroll from 'react-scroll';
import styles from './../styles/what.css';
import Can from './../images/can';
import Bottle from './../images/Bottle';
import Truck from './../images/Truck';

const Element = Scroll.Element;

function What() {
  return (
    <Element name="what" className={styles.what + " element"}>
      <div className={styles.whatWrapper}>
        <h1>WHAT WE DO</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec blandit mi. Fusce porta nulla ut est finibus vehicula. Suspendisse vehicula purus id placerat ullamcorper. Ut hendrerit ornare ornare. </p>
        <div className={styles.whatIcons}>
          <div className={styles.whatIcon}>
            <Can fill="#000" width="150" height="150" title={'CANNING'} />
            <h4>CANNING</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec blandit</p>
          </div>
          <div className={styles.whatIcon}>
            <Bottle fill="#000" width="150" height="150" title={'LABELING'} />
            <h4>LABELING</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec blandit</p>
          </div>
          <div className={styles.whatIcon}>
            <Truck fill="#000" width="150" height="150" title={'CONVENIENCE'} />
            <h4>CONVENIENCE</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec blandit</p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default What;