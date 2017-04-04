import React from 'react';
import ReactDOM, {render} from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexLink,
  IndexRoute
} 
from 'react-router-dom'
import { createHashHistory } from 'history';
import App from './containers/App';
import './stylesheets/index.css';

import About from './modules/About';
import Repos from './modules/Repos';
import Layout from './containers/Layout';

import 'bootstrap/dist/css/bootstrap.css';

render((
  <Router >
            <Route path="/" component={App}>
               <IndexRoute component={Layout}/>
               <Route path="/about" component={About} />
            </Route>
          </Router>
 ),
 
  document.getElementById('root')
);
