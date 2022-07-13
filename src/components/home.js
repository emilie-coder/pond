/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      comment: '',
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

  render() {
    return (
      <div className="homePage">
        <div className="hp_title">
          <div className="hp_logo" />
          <h1 className="titleFont">POND</h1>
          <p className="subtitle">let your music thrive in endess Web3 possibilities</p>
        </div>
        <div className="section1">
          <div className="s1_sub">
            <div className="s1_sub_a">
              <h2 className="s1_title">NFTs are transforming the music industry</h2>
            </div>
            <div className="s1_sub_b">
              <h2 className="s1_title">but many problems still exist...</h2>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="s2_a">
            <div className="s2_a_title">
              <h3 className="s2_title">
                How to make you music an NFT?
              </h3>
            </div>
            <div className="s2_a_subtitle">
              <p className="s2_subtitle">
                Releasing your music NFT can be quite a different and challenging experience to navigate.
              </p>
            </div>
            <div className="s2_b_title">
              <h3 className="s2_title">
                Isolated Music NFT Platforms?
              </h3>
            </div>
            <div className="s2_b_subtitle">
              <p className="s2_subtitle">
                There are many isolated music NFT platforms, causing confusiong for both artists and fans.
              </p>
            </div>
            <div className="s2_c_title">
              <h3 className="s2_title">
                What type of NFT do I choose?
              </h3>
            </div>
            <div className="s2_c_subtitle">
              <p className="s2_subtitle">
                There are many way to design the parameters of an NFT project. It can be hard to translate your thoughts into the right type of NFT.
              </p>
            </div>
            <div className="s2_d_title">
              <h3 className="s2_title">
                Who will buy my music NFTs?
              </h3>
            </div>
            <div className="s2_d_subtitle">
              <p className="s2_subtitle">
                Fan Egagement through NFT is a whole new process and traditional marketing strategies often deliver undesireable results.
              </p>
            </div>
          </div>
        </div>
        <div className="section3">
          <h2> How We Do It </h2>
          <div className="s3_section">
            <div className="s3_text_container">
              <h3 className="s3_section_title">Individualized Meetings</h3>
              <p className="s3_section_subtitle">We will get to know you, listen to your stories,
                and communicate with you about your demand…
              </p>
            </div>
            <div className="s3_image" id="s3_image_1" />
          </div>
          <div className="s3_section">
            <div className="s3_text_container">
              <h3 className="s3_section_title"> Community Analysis</h3>
              <p className="s3_section_subtitle"> We take a closer look at your music, analyze your audience’s preferences,
                and find connection between your fan community and the native Web3 consumers
              </p>
            </div>
            <div className="s3_image" id="s3_image_2" />
          </div>
          <div className="s3_section">
            <div className="s3_text_container">
              <h3 className="s3_section_title"> NFT Creation </h3>
              <p className="s3_section_subtitle"> After finalizing our plan with you, we start mobilizing our visual artists and NFT experts to execute the plan </p>
            </div>
            <div className="s3_image" id="s3_image_3" />
          </div>
          <div className="s3_section">
            <div className="s3_text_container">
              <h3 className="s3_section_title"> NFT Management </h3>
              <p className="s3_section_subtitle"> After finalizing our plan with you, we start mobilizing our visual artists and NFT experts to execute the plan </p>
            </div>
            <div className="s3_image" id="s3_image_4" />
          </div>
        </div>
        <div className="section4" id="signup">
          <h2>Contact Us</h2>
          <input
            onChange={this.onNameChange}
            value={this.state.name}
            placeholder="your name i.e. john smith"
            className="nameEntry"
          />
          <input
            onChange={this.onEmailChange}
            value={this.state.email}
            placeholder="your name i.e. john.smith@hotmail.com"
            className="emailEntry"
          />
          <input
            onChange={this.onCommentChange}
            value={this.state.comment}
            placeholder="i would like more information about..."
            className="commentEntry"
          />
          <FontAwesomeIcon icon={faSquarePlus} onClick={this.handleSubmit} id="addButton" />
        </div>
      </div>
    );
  }
}
export default Home;
