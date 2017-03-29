import React, {Component} from 'react';
//import {Link, IndexLink} from 'react-router';
import Date from './date.js';
import Routerst from './Routerstf.js'
//import {Navbar, NavItem} from 'react-materialize';
// <Route exact path="/" component={App}/>
	//	 <Route path="/about" component={About}/>
	//	 <Route path="/repos" component={Repos}/>
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexLink,
  IndexRoute
} 
from 'react-router-dom'

import App from '../containers/App';
import Layout from '../containers/Layout';
import About from '../modules/About';
import Repos from '../modules/Repos';



import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  TextInput,
  TextArea
} from 'reactstrap';

import routes from '../modules/routes.js';

class Header extends Component {
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  
 render(){
return (
  <div className="NavHead">
   <Router >
 <div>

        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">WanderLust</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to='/'>{'Home'}</Link> {" | "}</NavLink> 
              </NavItem>
              <NavItem>
                <NavLink><Link to='/about'>{'About Us'}</Link> {" | "}</NavLink> 
              </NavItem>
              <NavItem>
                <NavLink><Link to='/repos'>{'Repos'}</Link> {" | "}</NavLink> 
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/DenoRS">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

       
               
               <Route path="/about" component={About}/>
               <Route path="/repos" component={Repos}/>
            
      


      </div>
      </Router>

      <Jumbotron className="Header">
          <Container>
            <Row>
              <Col md={12}>
                <h1>Welcome to Wanderlust</h1>
                <p>
                  <Button
                    tag="a"
                    color="success"
                    size="large"
                    href="https://github.com/DenoRS"
                    target="_blank">
                    View my Github
                  </Button>
                </p>
        
    
        <Date />
              </Col>
            </Row>
     </Container>
</Jumbotron>
 {this.props.children}

</div>
);


}


}

export default Header;