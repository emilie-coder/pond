/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import {
  BrowserRouter as Router, Route, NavLink, Routes,
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquarePlus, faUsersLine, faMagnifyingGlassChart, faListCheck, faPaintBrush,
} from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      comment: '',
      currentSlide: 0,
      autoPlay: true,
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onCommentChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  reveal = (event) => {
    const reveals = document.querySelectorAll('.section3_subsection');

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

  revealRecord = (event) => {
    const reveals = document.querySelectorAll('.vinylRecord');

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

  revealNote = (event) => {
    const reveals = document.querySelectorAll('.section2_note');

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

  next = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide + 1,
    }));
  };

  prev = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide - 1,
    }));
  };

  changeAutoPlay = () => {
    this.setState((state) => ({
      autoPlay: !state.autoPlay,
    }));
  };

  updateCurrentSlide = (index) => {
    const { currentSlide } = this.state;

    if (currentSlide !== index) {
      this.setState({
        currentSlide: index,
      });
    }
  };

  render() {
    window.addEventListener('scroll', this.reveal);
    window.addEventListener('scroll', this.revealRecord);
    window.addEventListener('scroll', this.revealNote);
    const buttonStyle = { fontSize: 20, padding: '5px 20px', margin: '5px 0px' };
    return (
      <div className="homePage" id="page-wrap">
        <div className="topAnimation">
          <div className="header">
            <div className="titleAnimation">
              <div className="wordWrapper">
                <h1 className="headerTitle">P</h1>
                <h1 className="headerTitle">o</h1>
                <h1 className="headerTitle">n</h1>
                <h1 className="headerTitle">d</h1>
              </div>
              <div className="wordWrapper">
                <h1 className="headerTitle" id="titleBreak">C</h1>
                <h1 className="headerTitle">o</h1>
                <h1 className="headerTitle">l</h1>
                <h1 className="headerTitle">l</h1>
                <h1 className="headerTitle">e</h1>
                <h1 className="headerTitle">c</h1>
                <h1 className="headerTitle">t</h1>
                <h1 className="headerTitle">i</h1>
                <h1 className="headerTitle">v</h1>
                <h1 className="headerTitle">e</h1>
              </div>
              {/* <h1 className="headerTitle"> Pond Collective </h1> */}
            </div>
            <h2 className="headerSubTitle"> Let your music thrive in endless Web3 Possibilites </h2>
          </div>
          {/* <div className="section1">
            <div className="section1_line" />
            <div className="section1_content">
              <img className="section1_logo" alt="img" src={require('../graphics/LOGO.svg')} />
              <h2 className="section1_title"> Pond </h2>
            </div>
          </div> */}
          <div className="section2">
            <div className="section2_line" />
            <h1 className="section2_title">
              Why does NFT matter to musicians?
            </h1>
            <div className="section2_icons">
              <div className="section2_note">
                <div className="note_background" />
                <h2 className="note_title">Customize Music Release</h2>
                {/* <img className="note_image" alt="img" src={require('../Images/image1.jpg')} height={150} width={250} /> */}
                <h3 className="note_subtitle">We will get to know you, listen to your stories, ect</h3>
                <p className="note_text">-Uniqueness of your work
                  Powered by blockchain, NFT music/collectible is one of the most secure asset in the world. Any digital information of an NFT is imprinted on a blockchain,
                  meaning it can`t be deleted or changed by any third party. Once you create or own an NFT, you can easily prove yourself as the original creator or owner to others.
                </p>
              </div>
              <div className="section2_note">
                <div className="note_background" />
                <h2 className="note_title">Audience Engagement</h2>
                <h3 className="note_subtitle">We will get to know you, listen to your stories, ect</h3>
                <p className="note_text">-New ways to market your music
                  Have multiple arrangement ideas for a song? Mint each arrangement into an NFT and sell them individually; your fans can use your music with the full suite of
                  commercial rights while providing you with both an upfront revenue and exposure
                </p>
              </div>
              <div className="section2_note">
                <div className="note_background" />
                <h2 className="note_title">Revenue Generation</h2>
                <h3 className="note_subtitle">We will get to know you, listen to your stories, ect</h3>
                <p className="note_text">-The future of community engagementNFT collectibles, including arts, tokens, and badges are the
                  future of community engagement. Want to meet with your fans in person? Mint your back- stage access into a
                  NFT so that your most loyal fans can get to know their favorite musician in person while supporting your career
                </p>
              </div>
              <div className="section2_note">
                <div className="note_background" />
                <h2 className="note_title">Higher Royalty</h2>
                <h3 className="note_subtitle">We will get to know you, listen to your stories, ect</h3>
                <p className="note_text">-Your work, your royalties
                  By releasing your music in the form of your NFT, you get to skip the middlemen and retain most of the income yourself. On average, artists are projected to keep 70-80%
                  of the revenue their revenue generated by mining their music into NFT
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="section3_lineHeader" />
          <h1 className="section3_title">
            But.. NFT is confusing..
          </h1>
          <img className="vinylRecord" alt="img" src={require('../Images/brett-jordan-P_LEitbpCPg-unsplash.png')} />
          <div className="section3_subsections">
            <div className="section3_subsection" id="s3_1">
              <h2 className="section3_noteTitle">How do I make an NFT?</h2>
              <p className="section3_noteText"> We guide you through the process of creating an NFT and even mobilize our own artists to help</p>
            </div>
            <div className="section3_subsection" id="s3_2">
              <h2 className="section3_noteTitle">What type of NFT do I choose?</h2>
              <p className="section3_noteText"> We get to know you and your perspective buyers to find the perfect NFT platform, content, and style for you</p>
            </div>
            <div className="section3_subsection" id="s3_3">
              <h2 className="section3_noteTitle"> Who wants to buy my NFTs?</h2>
              <p className="section3_noteText"> We establish who your prospective target buyers are by getting to know you and your community </p>
            </div>
            <div className="section3_subsection" id="s3_4">
              <h2 className="section3_noteTitle">What NFT platform should I use?</h2>
              <p className="section3_noteText"> We help you choose the right NFT platform that is right for your community, art, music, and style</p>
            </div>
          </div>
        </div>
        <div className="bottom_animation">
          <div className="section4">
            <div className="section4_lineHeader" />
            <h1 className="section4_title">
              How we do it
            </h1>
            <div className="myCar">
              <button type="button" onClick={this.prev} style={buttonStyle}>
                Prev
              </button>
              <Carousel
                autoPlay={this.state.autoPlay}
                selectedItem={this.state.currentSlide}
                onChange={this.updateCurrentSlide}
                showThumbs={false}
                showArrows={false}
                infiniteLoop
                emulateTouch
                interval="9000"
                transitionTime="500"
                swipeable
                stopOnHover
                ariaLabel="string"
              >
                <div className="my_slide" id="slide1">
                  <h2 className="slide_title">Individualized Meetings</h2>
                  <FontAwesomeIcon icon={faUsersLine} className="slide_icon" />
                  <p className="slide_text">We will get to know you, listen to your stories, and communicate with you about your demand…</p>
                </div>
                <div className="my_slide" id="slide2">
                  <h2 className="slide_title">Community Analysis</h2>
                  <FontAwesomeIcon icon={faMagnifyingGlassChart} className="slide_icon" />
                  <p className="slide_text">We take a closer look at your music, analyze your audience’s preferences, and find connection between your fan community and the native Web3 consumers</p>
                </div>
                <div className="my_slide" id="slide3">
                  <h2 className="slide_title">NFT Management</h2>
                  <FontAwesomeIcon icon={faListCheck} className="slide_icon" />
                  <p className="slide_text">After finalizing our plan with you, we start mobilizing our visual artists and NFT experts to execute the plan</p>
                </div>
                <div className="my_slide" id="slide4">
                  <h2 className="slide_title">NFT Creation</h2>
                  <FontAwesomeIcon icon={faPaintBrush} className="slide_icon" />
                  <p className="slide_text">After finalizing our plan with you, we start mobilizing our visual artists and NFT experts to execute the plan</p>
                </div>
              </Carousel>
              <button type="button" onClick={this.next} style={buttonStyle}>
                Next
              </button>
            </div>
          </div>
          <div className="section5">
            <div className="section5_lineHeader" />
            <h1 className="section5_title">
              Subscribe to Pond
            </h1>
            <h2 className="section5_subtitle">Latest info and conversation on Music, Art, and NFT</h2>
            <div className="signUp">
              <input classsName="emailAddress" placeholder="Email Address" />
              <button className="singUpButton" type="button">Sign Up</button>
            </div>
            <h1 className="or">or...</h1>
            <button className="detailedSignUp" type="button">Are you a musician? We would like to get to know you more!</button>
          </div>
          <div className="section6">
            <div className="section6_lineHeader" />
            <h1 className="section6_title">
              Pond
            </h1>
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
      </div>
    );
  }
}
export default Home;
