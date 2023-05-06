import React, { useState } from 'react';
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import { Component } from "react";
import SignUp from "./SignUp";
import "./Navbar.css";

class Navbar extends Component {
  

  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  constructor(props) {
    super(props);
    this.state = {
      showSignUp: false
    };
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
  }

  handleSignUpClick() {
    this.setState({ showSignUp: true });
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="nav-logo">Traveller</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to = {item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button onClick={this.handleSignUpClick}>Sign up</button>
          {this.state.showSignUp && <SignUp />}

        </ul>
      </nav>
    );
  }
}

export default Navbar;
