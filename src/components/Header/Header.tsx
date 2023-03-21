import { withRouter } from '../../HOCs/withRouter';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
}

function Header({ location }: WithRouterProps) {
  const localPath = location?.pathname.slice(1);
  return (
    <div className="header">
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'link')} to="/">
        Main
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'link')} to="/about">
        About us
      </NavLink>
      <div className="activePage">Active page: {localPath === '' ? 'main' : localPath}</div>
    </div>
  );
}

export default withRouter(Header);
