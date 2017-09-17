import React, { Component } from 'react';
import styles from './../styles/footer.css';
import FacebookIcon from './../images/Facebook';
import TwitterIcon from './../images/Twitter';
import InstagramIcon from './../images/Instagram';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div>Copyright © 2017 Philadelphia's 1st Mobile Canning and Labeling Company</div>
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;