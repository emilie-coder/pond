/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import {
  BrowserRouter as Router, Route, NavLink, Routes,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import Menu from 'react-burger-menu/lib/menus/slide';
import rootReducer from './reducers';

import AboutUs from './components/aboutUs';
import FAQ from './components/faq';
import Home from './components/home';
import Manifesto from './components/manifesto';
import Contact from './components/contact';
import Navigation from './components/navigation';

function App(props) {
  // this creates the store with the reducers
  return (
    <Router>
      <div id="outer-container">
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="*" element={<FallBack />} />
      </Routes>
    </Router>
  );
}

function Nav(props) {
  return (
    <nav className="navigation">
      <Menu pageWrapId="page-wrap" outerContainerId="outer-container">
        <ul className="navElements">
          <li className="navElem"><NavLink to="/">Home</NavLink></li>
          <li className="navElem"><NavLink to="/manifesto">Manifesto</NavLink></li>
          <li className="navElem"><NavLink to="/FAQ">FAQ</NavLink></li>
          <li className="navElem"><NavLink to="/aboutUs">About Us</NavLink></li>
          <li className="navElem"><NavLink to="/contactUs">Contact Us</NavLink></li>
        </ul>
      </Menu>
    </nav>
  );
}

function FallBack(props) {
  return <div>URL Not Found</div>;
}

// this creates the store with the reducers
const store = configureStore({
  reducer: rootReducer,
});

const root = createRoot(document.getElementById('main'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
