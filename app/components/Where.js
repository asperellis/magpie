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
          <p>Our boundaries extend 90 miles from Philadelphia, but we are always up for a new adventure.  <a href="mailto:info@magpiebeveragesolutions.com">Let us know</a> if you fall out of these boundaries and want to do a canning run.</p>
        </div>
    </Element>
  );
}

export default Where;