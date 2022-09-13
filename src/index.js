import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Bar from './components/bar';
import Bottombar from './components/bottombar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bar/>
    <Bottombar/>
  </React.StrictMode>
);


