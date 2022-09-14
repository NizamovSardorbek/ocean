import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Bar from './components/bar';
import Bottombar from './components/bottombar';
import Icons from './components/icons';
import Contact from './components/contact';
import Messengers from './components/messengers';
import Navbar from './components/navbar';
import Inputs from './components/inputs';
import Carusels from './components/carusel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Bar/>
    <Bottombar/>
    <Icons/>
    <Inputs/>
  <Carusels/>
      <Contact/>
    <Messengers/>
  </React.StrictMode>
);


