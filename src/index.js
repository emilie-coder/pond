import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import {
  BrowserRouter as Router, Route, NavLink, Routes, useParams,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';
import Counter from './components/counter';
import Controls from './components/control';

function App(props) {
  // this creates the store with the reducers
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/test/:id" element={<Test />} />
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
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
  );
}

function Test(props) {
  const { id } = useParams();
  return <div> ID: {id} </div>;
}

function About(props) {
  return <div> All there is to know about me </div>;
}
function Welcome(props) {
  return (
    <div>
      Welcome
      <Counter />
      <Controls />
    </div>
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
