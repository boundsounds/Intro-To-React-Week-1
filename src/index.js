import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App.js';
import Navbar from './components/Navbar.js';
import Page from './components/Login.js';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <div className="container">
    <Navbar />
    <Page />
  </div>,
  // React.createElement(Page, {}, null),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
