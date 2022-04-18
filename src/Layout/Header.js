import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const [toggle, setToggle] = useState(false);

  const changeToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <header className={classes.header}>
      <nav className={classes['nav-lists']}>
        <h1 className={classes['heading-primary']}>
          <span className={classes.color}>X-</span>fitt
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes.icon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          onClick={changeToggle}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <ul
          onClick={changeToggle}
          className={
            toggle
              ? `${classes['nav-items']} ${classes.show}`
              : `${classes['nav-items']} ${classes.close}`
          }
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${classes['active']} ${classes['nav-link']}`
                  : classes['nav-link']
              }
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${classes['active']} ${classes['nav-link']}`
                  : classes['nav-link']
              }
              to="/blogs"
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${classes['active']} ${classes['nav-link']}`
                  : classes['nav-link']
              }
              to="/about"
            >
              About Me
            </NavLink>
          </li>
          {user ? (
            <button
              className={`${classes.btn} ${classes['btn-signout']}`}
              onClick={() => signOut(auth)}
            >
              Sign Out
            </button>
          ) : (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `${classes['active']} ${classes['nav-link']}`
                      : classes['nav-link']
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`${classes['btn-registration']}  ${classes['nav-link']}`}
                  to="/registration"
                >
                  Registration
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
