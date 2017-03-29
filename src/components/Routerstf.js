import React, {Component} from 'react';
import Router, {Route, browserHistory, IndexRoute} from 'react-router';
import About from '../modules/About';
import Repos from '../modules/Repos';

class Routerstf extends Component {
    render() {
        return (
            <Router history={browserHistory}>
        <Route path="/abouts" component={About}>
            <IndexRoute component={Repos}/>
            
        </Route>
        
    </Router>
        )
    }
}

export default Routerstf;