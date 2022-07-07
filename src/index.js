import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import {
  BrowserRouter as Router, Route, NavLink, Routes,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';

import AboutUs from './components/aboutUs';
import FAQ from './components/faq';
import Home from './components/home';
import Manifesto from './components/manifesto';

function App(props) {
  // this creates the store with the reducers
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
      </div>
    </Router>
  );
}

function Nav(props) {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/aboutUs">About Us</NavLink></li>
        <li><NavLink to="/FAQ">FAQ</NavLink></li>
        <li><NavLink to="/manifesto">Manifesto</NavLink></li>
      </ul>
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
