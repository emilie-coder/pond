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

class aboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <div className="aboutUsPage" id="page-wrap">
        <div className="aboutUsBackground" />
        <div className="aboutUs_content">
          <div className="ourStory">
            <h2 className="ourStoryTitle">
              Our Story
            </h2>
            <img className="ourStoryImage" alt="ourStoryImage" src={require('../Images/aboutUs/aboutUs.jpeg')} />
            <p className="ourStorySubText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <h2 className="whoWeAre">
            Who we are
          </h2>
          <div className="individuals">
            <div className="personCard" id="tony">
              <h2 className="personName">
                ZK
              </h2>
              <img className="personImage" alt="personImage" src={require('../Images/aboutUs/person1.jpg')} />
              <p className="personBio">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="personCard" id="tony">
              <h2 className="personName">
                TONY
              </h2>
              <img className="personImage" alt="personImage" src={require('../Images/aboutUs/person1.jpg')} />
              <p className="personBio">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
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
export default aboutUs;
