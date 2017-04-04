import React, {Component} from 'react';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { Col, Row, Container, Button, Label, FormGroup } from 'reactstrap';


import JournalForm from '../components/JournalForm.js';

class Contact extends Component{

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {};
  }

  handleSubmit(event, errors, values) {
    this.setState({errors, values});
  }

  render() {
    return (
      <div>
	  <Container>
	  <Row>
	  <Col md={{ size: 6, push: 2, pull: 2, offset: 1 }}>
        <AvForm onSubmit={this.handleSubmit}>
         
          <AvField name="name" label="Name" required />
         
          <AvGroup>
            <Label for="comment">Comment</Label>
            <AvInput name="comment" id="comment" required />
           
            <AvFeedback>This is an error!</AvFeedback>
          </AvGroup>
          
          <AvRadioGroup inline name="gender" label="Gender" required>
            <AvRadio label="Male" value="Male" id="radioOption1" />
            <AvRadio label="Female" value="Female" id="radioOption2" />
           
          </AvRadioGroup>
       
          <AvField type="select" name="rating" label="Option" helpMessage="Select a rating">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </AvField>
          <FormGroup>
            <Button>Submit</Button>
          </FormGroup>
        </AvForm>
        {this.state.values && <div>
          <h5>Submission values</h5>
          Invalid: {this.state.errors.join(', ')}<br />
          Values: <pre>{JSON.stringify(this.state.values, null, 2)}</pre>
        </div>}
		</Col>
		</Row>
		</Container>
      </div>
    );
  
}

}

export default Contact;