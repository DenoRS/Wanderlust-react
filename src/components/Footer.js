import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexLink
} 
from 'react-router-dom'

class Footer extends Component {

render() {
	return (
		    <footer>
      <div id="credits">
        <div className="container text-center">
          <div className="row">
            
              <li>&copy; 2015</li>
              <li><Link to="contactus">Contact Us</Link></li>
              <li><Link to="about">About</Link></li>
            
            
          </div>
        </div>
      </div>
    </footer>


		)
}



}

export default Footer;