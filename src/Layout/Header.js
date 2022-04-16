import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes['nav-lists']}>
        <h1 className={classes['heading-primary']}>
          <span className={classes.color}>X-</span>fitt
        </h1>
        <ul className={classes['nav-items']}>
          <li>
            <NavLink className={classes['nav-link']} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={classes['nav-link']} to="/aboutMe">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink className={classes['nav-link']} to="/blogs">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink className={classes['nav-link']} to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${classes.btn} ${classes['btn-login']}  ${classes['nav-link']}`}
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${classes.btn} ${classes['btn-registration']}  ${classes['nav-link']}`}
              to="/registration"
            >
              Registration
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
