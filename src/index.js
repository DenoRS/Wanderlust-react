import React from 'react';
import ReactDOM, {render} from 'react-dom';

import { Router, Route, IndexRoute, useRouterHistory, browserHistory } from 'react-router';
import { createHashHistory } from 'history';
import App from './containers/App';
import './stylesheets/index.css';

import About from './modules/About';
import Repos from './modules/Repos';

import 'bootstrap/dist/css/bootstrap.css';

render((

<App /> ),
 
  document.getElementById('root')
);
