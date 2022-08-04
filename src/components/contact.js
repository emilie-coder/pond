/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Routes,
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      comment: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://sheet.best/api/sheets/21c48555-6ce1-4976-88dc-6d7281b6a7c3', { email: this.state.email })
      .then((response) => {
        // console.log(response);
      });

    this.setState({ email: '' });
  };

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onCommentChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  onSubmit = (event) => {
    this.setState({ email: '' });
  };

  render() {
    return (
      <div className="contactUs" id="page-wrap">
        <div className="contactBackground" />
        <div className="faqPageWrapper">
          <div className="section5">
            <div className="section5_lineHeader" />
            <h1 className="contactUsTitle">
              Contact Us
            </h1>
            <h1 className="contactUsSub">
              Please provide us an email and we will reach out to you!
            </h1>
            <div className="signUp">
              <input
                className="emailAddress"
                placeholder="Email Address"
                onChange={this.onEmailChange}
                value={this.state.email}
              />
              <button className="singUpButton" type="button" onClick={this.handleSubmit}>Submit</button>
            </div>
            <h1 className="or">or...</h1>
            <button className="detailedSignUp" type="button">
              <a href="https://4ugpy48mo9j.typeform.com/to/TJTYozgB" className="link">
                Are you
                <span className="aMusician">
                    &nbsp;a musician
                </span>? Click Here!
                <FontAwesomeIcon icon={faLongArrowAltRight} id="contactArrow" />
              </a>
            </button>
          </div>
        </div>
        <div className="section6" id="manifestoBottomNavigation">
          <div className="section6_lineHeader" />
          <div className="section6_title_animation">
            <h1 className="section6_title">
              P
            </h1>
            <h1 className="section6_title">
              o
            </h1>
            <h1 className="section6_title">
              n
            </h1>
            <h1 className="section6_title">
              d
            </h1>
          </div>
          <div className="bottomNavigation">
            <ul className="bottomNavigationElements">
              <li className="navElem"><NavLink to="/">Home</NavLink></li>
              <li className="navElem"><NavLink to="/manifesto">Manifesto</NavLink></li>
              <li className="navElem"><NavLink to="/FAQ">FAQ</NavLink></li>
              <li className="navElem"><NavLink to="/aboutUs">About Us</NavLink></li>
              <li className="navElem"><NavLink to="/contactUs">Contact Us</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
