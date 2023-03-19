import React, { Component } from 'react';
import './About.css';
class About extends Component {
    render() {
        return (React.createElement("div", { className: "about" },
            React.createElement("div", { className: "title" }, "About us page"),
            React.createElement("div", { className: "descr" },
                "this page contains info about us ",
                React.createElement("br", null),
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex numquam fugit exercitationem at blanditiis dolorum, ullam corporis quos ad magni sunt accusamus voluptate pariatur libero, alias provident fugiat? Obcaecati, doloremque!")));
    }
}
export default About;
