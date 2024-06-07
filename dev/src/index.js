import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App.js';

let urlBase = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={urlBase} >
      {/* <HashRouter> */}
      <App />
      {/* </HashRouter> */}
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);
