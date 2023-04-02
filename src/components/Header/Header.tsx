import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { withRouter } from '../../HOCs/withRouter';
import './Header.css';

interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
}

const Header = ({ location }: WithRouterProps) => {
  const localPath = location?.pathname.slice(1);
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

export default withRouter(Header);
