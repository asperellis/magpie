import React, { Component } from 'react';
import Scroll from 'react-scroll';
import styles from './../styles/where.css';

const Element = Scroll.Element;

function Where(props) {
  return (
    <Element name="where" className={styles.where + " element elementSplit"}>
        <div className={styles.whereImg}></div>
        <div className={styles.whereText}>
          <h1>{props.wpContent.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: props.wpContent.description }}></p>
        </div>
    </Element>
  );
}

export default Where;