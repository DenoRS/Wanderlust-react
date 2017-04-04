import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexLink
} 
from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Form,
  Row,
  Col,
  Jumbotron,
  Button,
  TextInput,
  TextArea
} from 'reactstrap';

class Footer extends Component {

render() {
	return (

	<div>
	<Router>
	  
	 <footer className="footer">
      <div className="container">
         <Row>
          <Col md={{ size: 6,  push: 3, pull: 3 }}>

        <div className="text-center center-block">
                <a href="https://www.facebook.com/"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
	            <a href="https://twitter.com/"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
	            <a href="https://plus.google.com/"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a>
	            <a href="mailto:dennispetcu@gmail.com"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
		</div>
    
		  </Col>
		  
        </Row>
		 
      </div>
    </footer>
	</Router>
	</div>
		)
}



}

export default Footer;