import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const { pathname } = useLocation();
  const localPath = pathname.slice(1);
  return (
    <header className="header">
      <div className="linksWrapper">
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'link')} to="/">
          Main
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'link')} to="/about">
          About us
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'link')} to="/new-card">
          Add new card
        </NavLink>
      </div>

      <div className="activePage">Active page: {localPath === '' ? 'main' : localPath}</div>
    </header>
  );
};

export default Header;
