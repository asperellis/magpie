import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Home from './Home';
import Why from './Why';
import What from './What';
import Where from './Where';
import Who from './Who';
import Book from './Book';
import styles from './../styles/header.css';
import logo from './../images/logo.png';
import blackLogo from './../images/logo.png';

const Link = Scroll.Link;

class Header extends Component {
    render() {
        return (
          <header className={this.props.collapsed ? styles.headerCollapsed : styles.header}>
            <button className={[styles.headerNavToggle, this.props.navOpen ? styles.hamburgerSqueezeOpen : styles.hamburgerSqueeze].join(' ')} type="button" onClick={this.props.toggleNav}>
              <span className={styles.hamburgerBox}>
                  <span className={styles.hamburgerInner}></span>
              </span>
            </button>
            <Link to="home" activeClass={styles.active} spy={true} smooth={true} onSetInactive={this.props.collapse} onSetActive={this.props.expand} className={styles.logo}>
              <img src={logo} className="logo" alt="" width="200" title="" />
            </Link>
            <nav className={[styles.nav, this.props.navOpen ? styles.open : ''].join(' ')}>
                <Link activeClass={styles.active} to="why" spy={true} smooth={true} duration={500} offset={0} isDynamic={true} onSetActive={this.props.collapse} onClick={this.props.closeNav}>
                WHY CANS
                </Link>
                <Link activeClass={styles.active} to="what" spy={true} smooth={true} duration={500} offset={0} isDynamic={true} onSetActive={this.props.collapse} onClick={this.props.closeNav}>
                WHAT WE DO
                </Link>
                <Link activeClass={styles.active} to="where" spy={true} smooth={true} duration={500} offset={0} isDynamic={true} onSetActive={this.props.collapse} onClick={this.props.closeNav}>
                WHERE WE OPERATE
                </Link>
                <Link activeClass={styles.active} to="who" spy={true} smooth={true} duration={500} offset={0} isDynamic={true} onSetActive={this.props.collapse} onClick={this.props.closeNav}>
                WHO WE ARE
                </Link>
                <Link activeClass={styles.active} to="booking" spy={true} smooth={true} duration={500} offset={50} isDynamic={true} onSetActive={this.props.collapse} onClick={this.props.closeNav}>
                BOOKING
                </Link>
            </nav>
            {this.props.navOpen && <div className={styles.headerNavToggleBg} onClick={this.props.closeNav}></div>}
          </header>
        );
    }
}

export default Header;