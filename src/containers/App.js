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
	constructor(props) {
		super(props);		
		this.state = {
			entries
		};
	}
	
	
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
					<JournalForm entries={this.state.entries} createJournal={this.createJournal.bind(this)} />
				</Col>
				</Row>
			</Container>
      </div>
    );
  }
  
  createJournal(journal) {
        this.state.entries.push({
            journal
           });
        this.setState({ entries: this.state.entries });
    }
	
	saveJournal(oldJournal, newJournal) {
        const foundEntry = _.find(this.state.entries, entry => entry.journal === oldJournal);
        foundEntry.journal = newJournal;
        this.setState({ entries: this.state.entries });
    }

    deleteJournal(journalToDelete) {
        _.remove(this.state.entries, entry => entry.journal === journalToDelete);
        this.setState({ entries: this.state.entries });
    }
	
}

export default App;
