import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return <div className="App">Hello world</div>;
  }
}

class RouterWrap extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

export default RouterWrap;
