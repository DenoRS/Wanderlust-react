import React, { Component } from 'react';

import JournalForm from '../components/JournalForm.js';
import JournalList from '../components/JournalList.js';
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

class Layout extends Component {
  constructor(props) {
	super(props);
	this.state = {
		entries
	};
}
	
  render() {

    return (
	
       <div className="Layout">
			
                <Row>
				<Col md={5}>
						
                <JournalList  entries={this.state.entries}
                    saveJournal={this.saveJournal.bind(this)}
                    deleteJournal={this.deleteJournal.bind(this)}/>          
				</Col>
				
				<Col md={7}>
					<JournalForm entries={this.state.entries} createJournal={this.createJournal.bind(this)} />
				</Col>
				</Row>
			
      </div>
    );
  }
  


 createJournal(journal) {
        this.state.entries.push({
            journal,
            isCompleted: false
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

export default Layout;