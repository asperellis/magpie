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
        <p>We are a mobile canning and labeling partnership based out of Philadelphia, PA.  We work with small breweries whose beer is far too good to stay on the tasting room floor.  Our services are not limited to beer and we’re happy to accommodate any small-batch beverage creator. We’ll bring the cans, tops, labels, and everything else you’ll need to can and label your delicious creation. </p>
        <div className={styles.whatIcons}>
          <div className={styles.whatIcon}>
            <Can fill="#000" width="150" height="150" title={'CANNING'} />
            <h4>CANNING</h4>
            <p>Our machine, the Twin Monkey Yampa, has the capability to fill 16oz and 12oz cans</p>
          </div>
          <div className={styles.whatIcon}>
            <Bottle fill="#000" width="150" height="150" title={'LABELING'} />
            <h4>LABELING</h4>
            <p>We currently have a semi-automatic, “insert name of machine” with the capability to label xx an hour</p>
          </div>
          <div className={styles.whatIcon}>
            <Truck fill="#000" width="150" height="150" title={'CONVENIENCE'} />
            <h4>CONVENIENCE</h4>
            <p>We’re here to make everything as easy as possible for the brewer. You supply the liquid, and we bring everything else.</p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default What;