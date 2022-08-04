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

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <div className="faqPage" id="page-wrap">
        <div className="faqBackground" />
        <div className="faqPageWrapper">
          <h2 className="faqTitle">
            Frequently Asked Questions:
          </h2>
          <div className="faqs">
            <div className="faq" id="faq1">
              <div className="faq_question">
                <div className="q">
                  <h2>Q.</h2>
                </div>
                <h2 className="faq_header">
                  What are NFTs?
                </h2>
              </div>
              <div className="faq_answer">
                <div className="a">
                  <h2>A.</h2>
                </div>
                <h2 className="faq_subhead">
                  Think of NFT as a new format for the documents stored on your laptop. An NFT can be anything you like, from a JPEG picture to a playable MP3 file, a video to a legal contract.
                  Any digital information of an NFT is imprinted on a blockchain, meaning it can't be deleted or changed by any third party. Once you create or own an NFT, you can easily prove
                  yourself as the original creator or owner to others.
                </h2>
              </div>
            </div>
            <div className="faq" id="faq2">
              <div className="faq_question">
                <div className="q">
                  <h2>Q.</h2>
                </div>
                <h2 className="faq_header">
                  What value does NFT adds?
                </h2>
              </div>
              <div className="faq_answer">
                <div className="a">
                  <h2>A.</h2>
                </div>
                <h2 className="faq_subhead">
                  Anyone can buy a Monet print, but only one person owns the original.
                  NFT allows individuals the power of unique ownership online that is easily and safely resealable without the need of third-party certification.
                </h2>
              </div>
            </div>
            <div className="faq" id="faq3">
              <div className="faq_question">
                <div className="q">
                  <h2>Q.</h2>
                </div>
                <h2 className="faq_header">
                  Why should I NFTs?
                </h2>
              </div>
              <div className="faq_answer">
                <div className="a">
                  <h2>A.</h2>
                </div>
                <h2 className="faq_subhead">
                  With NFT, you can better monetize your artistry, protect your rights and establish genuine connections with your fans in previously unimaginable ways:
                </h2>
              </div>
            </div>
            <div className="faq" id="faq4">
              <div className="faq_question">
                <div className="q">
                  <h2>Q.</h2>
                </div>
                <h2 className="faq_header">
                  What is the difference in royalities with NFTs?
                </h2>
              </div>
              <div className="faq_answer">
                <div className="a">
                  <h2>A.</h2>
                </div>
                <h2 className="faq_subhead">
                  The industry average royalties for art-licesnsing agreements is 3-6%,
                  while the projected royalties that our NFT project provides for artists is 70-80%.
                </h2>
              </div>
            </div>
            <div className="faq" id="faq5">
              <div className="faq_question">
                <div className="q">
                  <h2>Q.</h2>
                </div>
                <h2 className="faq_header">
                  What shape can music NFTs take?
                </h2>
              </div>
              <div className="faq_answer">
                <div className="a">
                  <h2>A.</h2>
                </div>
                <h2 className="faq_subhead">
                  NFTs can take many forms such as:
                  <div className="faq4_sub">
                    - One of One, which is an NFT that is minted and issued as a unique edition
                  </div>
                  <div className="faq4_sub">
                    - Audiovisuals, which is an NFT that combines visual and audio representations
                  </div>
                  <div className="faq4_sub">
                    - Artist Collections, which is an NFT collection that often include 1k - 10k individual NFTs
                  </div>
                  <div className="faq4_sub">
                    - Artist Collections, which is an NFT collection that often include 1k - 10k individual NFTs
                  </div>
                  <div className="faq4_sub">
                    - NFT with Perks, which is an NFT that grants your fans access to real-world gated events, merchs and special privileges
                  </div>
                  <div className="faq4_sub">
                    - Royalty Sharing, which is an NFT that gives holders a slice of the future royalties of the song
                  </div>
                  and more!
                </h2>
              </div>
            </div>
            <div className="faq" id="faq6">
              <div className="faq_question">
                <div className="q">
                  <h2>Q.</h2>
                </div>
                <h2 className="faq_header">
                  Where would my NFT's exist and how do I choose what is right for me?
                </h2>
              </div>
              <div className="faq_answer">
                <div className="a">
                  <h2>A.</h2>
                </div>
                <h2 className="faq_subhead">
                  Some of the major blockchains are Flow, Ethereum, Solana, and Wax. We can help you choose the best one for your art!
                </h2>
              </div>
            </div>
            <div className="faq" id="faq7">
              <div className="faq_question">
                <div className="q">
                  <h2>Q.</h2>
                </div>
                <h2 className="faq_header">
                  What if I am bad at art?
                </h2>
              </div>
              <div className="faq_answer">
                <div className="a">
                  <h2>A.</h2>
                </div>
                <h2 className="faq_subhead">
                  We will help you along every step of the way and can mobilize our own artists to help create your NFT!
                </h2>
              </div>
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
export default FAQ;
