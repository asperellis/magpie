import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Home from './Home';
import Why from './Why';
import What from './What';
import Where from './Where';
import Who from './Who';
import Book from './Book';
import styles from './../styles/header.css';
import Logo from './../images/Logo';
import FacebookIcon from './../images/Facebook';
import TwitterIcon from './../images/Twitter';
import InstagramIcon from './../images/Instagram';
import Email from './../images/Email';

const Link = Scroll.Link;

function Header(props) {
  return (
    <header className={props.collapsed ? styles.headerCollapsed : styles.header}>
      <button className={[styles.headerNavToggle, props.navOpen ? styles.hamburgerSqueezeOpen : styles.hamburgerSqueeze].join(' ')} type="button" onClick={props.toggleNav} aria-label="Mobile Navigation" role="button">
        <span className={styles.hamburgerBox}>
            <span className={styles.hamburgerInner}></span>
        </span>
      </button>
      <Link to="home" activeClass={styles.active} spy={true} smooth={true} onSetInactive={props.collapse} onSetActive={props.expand} className={styles.logo}>
        <Logo fill="#ffffff" width="200" height="40" title="Magpie Beverage Solutions" />
      </Link>
      <nav className={[styles.nav, props.navOpen ? styles.open : ''].join(' ')}>
          <Link activeClass={styles.active} to="what" spy={true} smooth={true} duration={500} offset={0} isDynamic={true} onSetActive={props.collapse} onClick={props.closeNav}>
          WHAT WE DO
          </Link>
          <Link activeClass={styles.active} to="why" spy={true} smooth={true} duration={500} offset={0} isDynamic={true} onSetActive={props.collapse} onClick={props.closeNav}>
          WHY CANS
          </Link>
          <Link activeClass={styles.active} to="where" spy={true} smooth={true} duration={500} offset={0} isDynamic={true} onSetActive={props.collapse} onClick={props.closeNav}>
          WHERE WE OPERATE
          </Link>
          <Link activeClass={styles.active} to="who" spy={true} smooth={true} duration={500} offset={0} isDynamic={true} onSetActive={props.collapse} onClick={props.closeNav}>
          WHO WE ARE
          </Link>
          <Link activeClass={styles.active} to="booking" spy={true} smooth={true} duration={500} offset={50} isDynamic={true} onSetActive={props.collapse} onClick={props.closeNav}>
          BOOKING
          </Link>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/MagpieBeverage/" className={[styles.socialIcon, styles.first].join(' ')}>
              <FacebookIcon fill="#ffffff" width="25" height="25" title="Facebook" />
            </a>
            <a href="https://twitter.com/MagpieBeverage" className={styles.socialIcon}>
              <TwitterIcon fill="#ffffff" width="25" height="25" title="Twitter" />
            </a>
            <a href="https://www.instagram.com/magpiebeverage/" className={styles.socialIcon}>
              <InstagramIcon fill="#ffffff" width="25" height="25" title="Instagram" />
            </a>
            <a href="mailto:info@magpiebeveragesolutions.com" className={styles.socialIcon}>
              <Email fill="#ffffff" width="25" height="25" title="Email" />
            </a>
          </div>
      </nav>
      {props.navOpen && <div className={styles.headerNavToggleBg} onClick={props.closeNav}></div>}
    </header>
  );
}

export default Header;