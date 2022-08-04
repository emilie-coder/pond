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

class Manifesto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  changeColor1 = (event) => {
    const reveals = document.querySelectorAll('.part3_bottom');
    const colorChanges = document.querySelectorAll('.shape');

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        for (let j = 0; j < colorChanges.length; j++) {
          colorChanges[j].classList.add('color1');
        }
      } else {
        for (let j = 0; j < colorChanges.length; j++) {
          colorChanges[j].classList.remove('color1');
        }
      }
    }
  };

  changeColor2 = (event) => {
    const reveals = document.querySelectorAll('.part5');
    const colorChanges = document.querySelectorAll('.shape');

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        for (let j = 0; j < colorChanges.length; j++) {
          colorChanges[j].classList.remove('color1');
          colorChanges[j].classList.add('color2');
        }
      } else {
        for (let j = 0; j < colorChanges.length; j++) {
          colorChanges[j].classList.remove('color2');
        }
      }
    }
  };

  changeColor3 = (event) => {
    const reveals = document.querySelectorAll('.section6');
    const colorChanges = document.querySelectorAll('.shape');

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        for (let j = 0; j < colorChanges.length; j++) {
          colorChanges[j].classList.remove('color2');
          colorChanges[j].classList.add('color3');
        }
      } else {
        for (let j = 0; j < colorChanges.length; j++) {
          colorChanges[j].classList.remove('color3');
        }
      }
    }
  };

  revealItems = (event) => {
    const reveals = document.querySelectorAll('.part3_item');

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  };

  revealItems2 = (event) => {
    const reveals = document.querySelectorAll('.part4_un');

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  };

  revealItems3 = (event) => {
    const reveals = document.querySelectorAll('.part6_planning');

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  };

  render() {
    window.addEventListener('scroll', this.changeColor1);
    window.addEventListener('scroll', this.changeColor2);
    window.addEventListener('scroll', this.changeColor3);
    window.addEventListener('scroll', this.revealItems);
    window.addEventListener('scroll', this.revealItems2);
    window.addEventListener('scroll', this.revealItems3);

    return (
      <div className="manifestoPage" id="page-wrap">
        <div className="manifestoBackground">
          <div className="shape" id="shape1" />
          <div className="shape" id="shape2" />
          <div className="shape" id="shape3" />
        </div>
        <div className="manifestoWrapper">
          <div className="sideLine" />
          <div className="mainText">
            <h2 className="part1">
              Freedom.
            </h2>
            <h2 className="part2">
              This one single word defines <span className="part2_us">us</span>.
            </h2>
            <h2 className="part3">
              <div className="part3_top">At Pond, we help you as an artist to</div>
              <div className="part3_item"> - monetize your artistry</div>
              <div className="part3_item"> - increase your exposure</div>
              {/* <div className="part3_and">and</div> */}
              <div className="part3_item"> - broaden fan engagement</div>
              <div className="part3_bottom">with NFTs.</div>
            </h2>
            <h2 className="part4">
              The established music industry benefits from
              <span className="part4_span">
            &nbsp;depriving you the rightful
                <div className="part4_main"><span className="part4_un">artistic independence</span> and <span className="part4_un">share of profit</span>.</div>
              </span>
            </h2>
            <h2 className="part5">
              We do things differently.
            </h2>
            <h2 className="part6">
              <div className="part6_top">We help you launch your NFT project,</div>
              <div className="part6_planning">from planning to implementation,</div>
              <div className="part6_mid">with you having the final say in every step of the way.</div>
              <div className="part6_bottom">In addition, you get the lion's share of the profit!</div>
            </h2>
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
export default Manifesto;
