import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'link')} to="/">
          Main
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'link')} to="/about">
          About us
        </NavLink>
      </div>
    );
  }
}

export default Header;
