import React, {Component} from 'react';
import {
  Container,
  TextInput,
  TextArea,
  Form,
  Row,
  Label,
  h2,
  Button,
  FormGroup
  
} from 'reactstrap'; 
import _ from 'lodash';
import '../stylesheets/jForm.css';

class JournalForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			error: null
		};
	}


 renderError() {
        if (!this.state.error) { return null; }

        return <div style={{ color: 'red' }}>{this.state.error}</div>;
    }
	
	
	render() {
        return (
		  
	
	<div className="something">
	<Form id="formcont"  onSubmit={this.doSubmit.bind(this)}>
	<h2 id="titles"> Journal Entry </h2>
	
	<FormGroup>
	 <input type="text" className="form-control" ref="createInput" placeholder="Title of entry"/>
	
	</FormGroup>

	
	 <FormGroup>
		<textarea className="form-control" id="textre" rows="3" placeholder="Write here...">
		</textarea>
	 </FormGroup>
	 
     <FormGroup>
		<Button type="submit" id="btn2"> Add </Button>
		{this.renderError()}
     </FormGroup>
	
	</Form>
	
	
	 </div>

	 );
	 }

	doSubmit(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const journal = createInput.value;
        const validateInput = this.validateInput(journal);

        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createJournal(journal);
        this.refs.createInput.value = '';
    }
	
	validateInput(journal) {
            return 'Please enter a journal entry.';
        if (!journal) {
        } else if (_.find(this.props.entries, entry => entry.journal === journal)) {
            return 'Entry already exists.';
        } else {
            return null;
        }
    }
	 
	 
}

export default JournalForm;