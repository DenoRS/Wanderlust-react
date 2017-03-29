import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylesheets/App.css';

import Header from '../components/Header.js';
import Date from '../components/date.js';
import About from '../modules/About';
import Repos from '../modules/Repos';

import JournalForm from '../components/JournalForm.js';
import JournalList from '../components/JournalList.js';
import { Router, Route, hashHistory} from 'react-router';
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
	this.state = {
		
	};
}
	
  render() {

    return (
	
       <div className="App">
        <Header /> 
                
			
			<Container>
			<Layout />

       
			</Container>
   
			
      </div>
    );
  }
	
}

export default App;
