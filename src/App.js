import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error/Error';
class App extends Component {
    render() {
        return (React.createElement("div", { className: "App" },
            React.createElement(Header, null),
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
                React.createElement(Route, { path: "/about", element: React.createElement(About, null) }),
                React.createElement(Route, { path: "*", element: React.createElement(Error, null) }))));
    }
}
class RouterWrap extends Component {
    render() {
        return (React.createElement(BrowserRouter, null,
            React.createElement(App, null)));
    }
}
export default RouterWrap;
