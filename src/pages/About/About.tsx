import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="title">About us page</div>
        <div className="descr">
          this page contains info about us <br /> Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ex numquam fugit exercitationem at blanditiis dolorum, ullam corporis
          quos ad magni sunt accusamus voluptate pariatur libero, alias provident fugiat? Obcaecati,
          doloremque!
        </div>
      </div>
    );
  }
}

export default About;
