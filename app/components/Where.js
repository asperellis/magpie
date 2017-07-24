import React, { Component } from 'react';
import Scroll from 'react-scroll';
import styles from './../styles/where.css';

const Element = Scroll.Element;

function Where() {
  return (
    <Element name="where" className={styles.where + " element elementSplit"}>
        <div className={styles.whereImg}></div>
        <div className={styles.whereText}>
          <h1>WHERE WE OPERATE</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec blandit mi. Fusce porta nulla ut est finibus vehicula. Suspendisse vehicula purus id placerat ullamcorper. Ut hendrerit ornare ornare. </p>
        </div>
    </Element>
  );
}

export default Where;