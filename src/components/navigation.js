/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { elastic as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquarePlus, faGripLines, faLines, faBars,
} from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter as Router, Route, NavLink, Routes,
} from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    console.log('trying to open');
    this.setState({ menuOpen: state.isOpen });
  }

  hide = () => {
    console.log('trying to close');
    this.setState({ menuOpen: false });
  };

  render() {
    return (
      <Menu
        isOpen={this.state.menuOpen}
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
        right
        onStateChange={(state) => this.handleStateChange(state)}
        width="20%"
      >
        <li className="navElem" onClick={this.hide}><NavLink to="/">Home</NavLink></li>
        <li className="navElem" onClick={this.hide}><NavLink to="/manifesto">Manifesto</NavLink></li>
        <li className="navElem" onClick={this.hide}><NavLink to="/FAQ">FAQ</NavLink></li>
        <li className="navElem" onClick={this.hide}><NavLink to="/aboutUs">About Us</NavLink></li>
        <li className="navElem" onClick={this.hide}><NavLink to="/contactUs">Contact Us</NavLink></li>
      </Menu>
    );
  }
}
export default Navigation;
