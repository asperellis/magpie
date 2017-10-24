import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Header from './Header';
import Home from './Home';
import Why from './Why';
import What from './What';
import Where from './Where';
import Who from './Who';
import Book from './Book';
import DataStore from './../flux/DataStore.js'
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
        this.handleScroll = this.handleScroll.bind(this);
    };

    componentWillMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
      let scrollPos = window.scrollY;
      if(scrollPos > 50 && !this.state.collapsed) {
        this.collapseHeader();
      }
      if(scrollPos < 50 && this.state.collapsed) {
        this.expandHeader();
      }
    }

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
        const allData = DataStore.getAll();
        return (
            <div className={[styles.app, this.state.navOpen ? styles.navOpen : ""].join(' ')}>
                <Header collapsed={this.state.collapsed} collapse={this.collapseHeader} expand={this.expandHeader} toggleNav={this.toggleMobileNav} closeNav={this.closeMobileNav} navOpen={this.state.navOpen} />
                <main role="main" className="main">
                    <Home wpContent={DataStore.getPageBySlug('home-2').acf} />
                    <What wpContent={DataStore.getPageBySlug('what-we-do').acf} />
                    <Why wpContent={DataStore.getPageBySlug('why-cans').acf} />
                    <Where wpContent={DataStore.getPageBySlug('where-we-operate').acf} />
                    <Who wpContent={DataStore.getPageBySlug('who-we-are').acf} />
                    <Book wpContent={DataStore.getPageBySlug('booking').acf} />
                </main>
            </div>
        );
    }
}

export default App;