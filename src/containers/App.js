import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylesheets/App.css';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Date from '../components/date.js';
import About from '../modules/About';
import Repos from '../modules/Repos';

import JournalForm from '../components/JournalForm.js';
import JournalList from '../components/JournalList.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexLink,
  IndexRoute
} 
from 'react-router-dom'
import _ from 'lodash';

import Routese from '../modules/routes.js';
import Layout from './Layout';


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


class App extends Component {
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

	
  render() {

    return (
	
       <div className="App">

			<Header /> 
			   
			<Container>
			<Layout/>

       
			</Container>
   
			<Footer />
      </div>
    );
  }
	
}

export default App;
