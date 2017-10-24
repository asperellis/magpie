import React, { Component } from 'react';
import Scroll from 'react-scroll';
import styles from './../styles/who.css';
import LazyLoad from 'react-lazy-load';
const Element = Scroll.Element;

function Who(props) {
  return (
    <Element name="who" className={styles.who + " element elementSplit"}>
        <LazyLoad className={'LazyLoad'} offset={500}>
          <div className={styles.whoImg}></div>
        </LazyLoad>
        <div className={styles.whoText}>
          <h1 dangerouslySetInnerHTML={{ __html: props.wpContent.title }}></h1>
          <div dangerouslySetInnerHTML={{ __html: props.wpContent.description }}></div>
        </div>
    </Element>
  );
}

export default Who;