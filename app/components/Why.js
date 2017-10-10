import React, { Component } from 'react';
import Scroll from 'react-scroll';
import styles from './../styles/why.css';
import Sun from './../images/Sun';
import BottleBroken from './../images/BottleBroken';
import Oxygen from './../images/Oxygen';
import Recycle from './../images/Recycle';

const Element = Scroll.Element;

function Why(props) {
  return (
    <Element name="why" className={styles.why + " element elementSplit"}>
        <div className={styles.whyImg}></div>
        <div className={styles.whyText}>
          <h1>{props.wpContent.title}</h1>
          <div className={styles.whyList}>
            <div>
              <Sun fill="#000" width="100" height="100" title={'Sun'} />
              {props.wpContent.sun_description}
            </div>
            <div>
              <Oxygen fill="#000" width="100" height="100" title={'Oxygen'} />
              {props.wpContent.oxygen_description}
            </div>
            <div>
              <Recycle fill="#000" width="100" height="100" title={'Recycle'} />
              {props.wpContent.recycle_description}
            </div>
            <div>
              <BottleBroken fill="#000" width="100" height="100" title={'Broken Bottle'} />
              {props.wpContent.bottle_description}
            </div>
          </div>
        </div>
    </Element>
  );
}

export default Why;