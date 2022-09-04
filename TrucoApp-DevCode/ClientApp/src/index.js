import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root = ReactDOM.createRoot(document.getElementById("root"));
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

root.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
 );

registerServiceWorker();

