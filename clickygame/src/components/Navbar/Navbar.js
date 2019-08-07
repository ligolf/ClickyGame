//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft">Leonardo da Vinci Clicky Memory Game</li>
        
          <li className="itemCenter">Click on any image to earn a point,<br/><br/>but don't click on the same picture more than once.<br/><br/>Click all 12 pics, and you win.</li>

          <li className="itemRight">Score: {this.props.score}<br/><br/></li>
        </ul>

      </nav>
    );
  }
}

export default Navbar;