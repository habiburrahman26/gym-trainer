import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/aboutMe">About Me</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/registration">Registration</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
