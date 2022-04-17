import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

import facebookIcon from '../../assects/icon/facebookLogo.png';
import twitterLogo from '../../assects/icon/twitterLogo.png';
import youtubeLogo from '../../assects/icon/youtubeLogo.png';
import googleLogo from '../../assects/icon/googleLogo.png';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <div>&copy; 2022 by X-fitt.All rights reserved.</div>
        <div className={classes['icon-box']}>
          <Link to="https://www.facebook.com/x-fitt">
            <img src={facebookIcon} alt="" className={classes.icon} />
          </Link>
          <Link to="https://www.google.com/x-fitt">
            <img src={googleLogo} alt="" className={classes.icon} />
          </Link>
          <Link to="https://www.twitter.com/x-fitt">
            <img src={twitterLogo} alt="" className={classes.icon} />
          </Link>
          <Link to="https://www.youtube.com/x-fitt">
            <img src={youtubeLogo} alt="" className={classes.icon} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
