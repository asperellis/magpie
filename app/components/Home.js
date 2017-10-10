import React, { Component } from 'react';
import Scroll from 'react-scroll';
import styles from './../styles/home.css';
const Link = Scroll.Link;
const Element = Scroll.Element;

function Home(props) {
  return (
    <Element name="home" className={styles.home + " element"}>
        <div className={styles.homeText}>
          <h1 dangerouslySetInnerHTML={{ __html: props.wpContent.title }}></h1>
          <p>{props.wpContent.description}</p>
          <Link className={styles.btn} type="button" to="booking" spy={true} smooth={true} duration={500} offset={0} isDynamic={true}>
          {props.wpContent.button_text}
          </Link>
        </div>
    </Element>
  );
}

export default Home;