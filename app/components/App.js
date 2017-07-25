import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Header from './Header';
import Home from './Home';
import Why from './Why';
import What from './What';
import Where from './Where';
import Who from './Who';
import Book from './Book';
import styles from './../styles/app.css';

const Link = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navOpen: false,
            collapse: false
        };

        this.toggleMobileNav = this.toggleMobileNav.bind(this);
        this.closeMobileNav = this.closeMobileNav.bind(this);
        this.collapseHeader = this.collapseHeader.bind(this);
        this.expandHeader = this.expandHeader.bind(this);
    };

    collapseHeader() {
      this.setState(function() {
          return {
              collapsed: true
          };
      });
    };

    expandHeader() {
      this.setState(function() {
          return {
              collapsed: false
          };
      });
    };

    toggleMobileNav() {
        this.setState(function() {
            return {
                navOpen: !this.state.navOpen
            };
        });
    };

    closeMobileNav() {
        this.setState(function() {
            return {
                navOpen: false
            };
        });
    };

    componentDidMount() {
        scrollSpy.update();
    };

    render() {
        return (
            <div className={[styles.app, this.state.navOpen ? styles.navOpen : ""].join(' ')}>
                <Header collapsed={this.state.collapsed} collapse={this.collapseHeader} expand={this.expandHeader} toggleNav={this.toggleMobileNav} closeNav={this.closeMobileNav} navOpen={this.state.navOpen} />
                <main role="main" className="main">
                    <Home />
                    <Why />
                    <What />
                    <Where />
                    <Who />
                    <Book />
                </main>
            </div>
        );
    }
}

export default App;