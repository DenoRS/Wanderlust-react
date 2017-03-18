import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylesheets/App.css';

import Header from '../components/Header.js';
import Date from '../components/date.js';

import JournalForm from '../components/JournalForm.js';

import _ from 'lodash';

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

const entries = [
	{
		journal: 'Make React Great Again'
	},
	{
		journal: 'Eat Dinner'
	}
	];
	
class App extends Component {
  render() {
    return (
       <div className="App">
        <Header /> 
			<Container>
                <Row>
				<Col md={4}>
					<p> Testing </p>           
				</Col>
				
				<Col md={8}>
					<JournalForm />
				</Col>
				</Row>
			</Container>
      </div>
    );
  }
}

export default App;
