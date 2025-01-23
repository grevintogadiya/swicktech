import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './okaberry/navabr';
import Home from './okaberry/home';
import Featured from './okaberry/Featured';
import Modren from './okaberry/Modren';
import Company from './okaberry/Company';
import Find from './okaberry/Find';
import Client from './okaberry/Client';
import Agent from './okaberry/Agent';
import Recent from './okaberry/Recent'; 
import Photos from './okaberry/photos';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Home />
    <Featured />
    <Modren />
    <Company />
    <Find />
    <Client />
    <Agent />
    <Recent />
    <Photos />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
