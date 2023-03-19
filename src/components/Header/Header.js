import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
class Header extends Component {
    render() {
        return (React.createElement("div", { className: "header" },
            React.createElement(NavLink, { className: ({ isActive }) => (isActive ? 'active' : 'link'), to: "/" }, "Main"),
            React.createElement(NavLink, { className: ({ isActive }) => (isActive ? 'active' : 'link'), to: "/about" }, "About us")));
    }
}
export default Header;
