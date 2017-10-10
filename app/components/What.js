import React, { Component } from 'react';
import Scroll from 'react-scroll';
import styles from './../styles/what.css';
import Can from './../images/can';
import Bottle from './../images/Bottle';
import Truck from './../images/Truck';

const Element = Scroll.Element;

function What(props) {
  return (
    <Element name="what" className={styles.what + " element"}>
      <div className={styles.whatWrapper}>
        <h1>{props.wpContent.title}</h1>
        <p>{props.wpContent.description}</p>
        <div className={styles.whatIcons}>
          <div className={styles.whatIcon}>
            <Can fill="#000" width="150" height="150" title={'CANNING'} />
            <h4>{props.wpContent.can_title}</h4>
            <p>{props.wpContent.can_description}</p>
          </div>
          <div className={styles.whatIcon}>
            <Bottle fill="#000" width="150" height="150" title={'LABELING'} />
            <h4>{props.wpContent.label_title}</h4>
            <p>{props.wpContent.label_description}</p>
          </div>
          <div className={styles.whatIcon}>
            <Truck fill="#000" width="150" height="150" title={'CONVENIENCE'} />
            <h4>{props.wpContent.convenience_title}</h4>
            <p>{props.wpContent.convenience_description}</p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default What;