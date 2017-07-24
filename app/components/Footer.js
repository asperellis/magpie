import React, { Component } from 'react';
import logo from './../images/logo-footer.png';
import styles from './../styles/footer.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div>Copyright © 2017 Philadelphia's 1st Mobile Canning and Labeling Company</div>
        <div className={styles.footerLogo}><img src={logo} className="logo" alt="" width="20" title="" /></div>
      </div>
    </footer>
  );
}

export default Footer;