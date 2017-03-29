import React, {Component} from 'react';

import About from './About.js';
import Repos from './Repos.js';
import App from '../containers/App.js';

import { Router, Route, hashHistory, browserHistory, IndexRoute} from 'react-router';

class Routes extends Component {
	render() {
		return (
	 <Route path="/" component={App}>
    <IndexRoute component={Repos} />
    <Route path="/cats" component={About} />
  </Route>
	)
}
}

export default Routes;