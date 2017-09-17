import React, { Component } from 'react';
import Scroll from 'react-scroll';
import styles from './../styles/why.css';
import Sun from './../images/Sun';
import BottleBroken from './../images/BottleBroken';
import Oxygen from './../images/Oxygen';
import Recycle from './../images/Recycle';

const Element = Scroll.Element;

function Why() {
  return (
    <Element name="why" className={styles.why + " element elementSplit"}>
        <div className={styles.whyImg}></div>
        <div className={styles.whyText}>
          <h1>WHY CANS</h1>
          <div className={styles.whyList}>
            <div>
              <Sun fill="#000" width="100" height="100" title={'Sun'} />
              Less exposure to light prevents the beer from skunking
            </div>
            <div>
              <Oxygen fill="#000" width="100" height="100" title={'Oxygen'} />
              Holds a more consistent oxygen level - fresher for longer
            </div>
            <div>
              <Recycle fill="#000" width="100" height="100" title={'Recycle'} />
              Minimal carbon footprint ~ 60% recyclable
            </div>
            <div>
              <BottleBroken fill="#000" width="100" height="100" title={'Broken Bottle'} />
              Better durability - easier to transport and they don’t break into hundreds of pieces
            </div>
          </div>
        </div>
    </Element>
  );
}

export default Why;