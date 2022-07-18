/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter as Router, Route, NavLink, Routes,
} from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: true,
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    return (
      <div>
        <Menu
          isOpen
          onStateChange={(state) => this.handleStateChange(state)}
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
          right
        >
          <li className="navElem" onClick={() => this.toggleMenu()}><NavLink to="/">Home</NavLink></li>
          <li className="navElem"><NavLink to="/manifesto">Manifesto</NavLink></li>
          <li className="navElem"><NavLink to="/FAQ">FAQ</NavLink></li>
          <li className="navElem"><NavLink to="/aboutUs">About Us</NavLink></li>
          <li className="navElem"><NavLink to="/contactUs">Contact Us</NavLink></li>
        </Menu>
        <div onClick={() => this.toggleMenu()}> fuck </div>
      </div>
    );
  }
}
export default Navigation;
