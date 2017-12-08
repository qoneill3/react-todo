// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router,browserHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import routes from './config/routes.js';

ReactDOM.render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('root')
);
registerServiceWorker();
