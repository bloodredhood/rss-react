import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'link')} to="/">
        Main
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'link')} to="/about">
        About us
      </NavLink>
      <div className="activePage">
        Active page: {location.pathname === '/' ? 'main' : location.pathname.slice(1)}
      </div>
    </div>
  );
};

export default Header;
