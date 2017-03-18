import React, {Component} from 'react';
import {Link} from 'react-router';
//import {Navbar, NavItem} from 'react-materialize';
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


class Header extends Component {
 render(){
return (
<div className="NavHead">


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
                    href="http://reactstrap.github.io"
                    target="_blank">
                    View Reactstrap Docs
                  </Button>
                </p>
				
		
			
              </Col>
            </Row>
		 </Container>
</Jumbotron>
</div>
)
}
}

export default Header;