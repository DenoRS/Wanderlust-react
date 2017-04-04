import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
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

class JournalItem extends Component {
  constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
  }
  
  renderJournalSection() {
        const { journal } = this.props;

        if (this.state.isEditing) {
            return (
                <td>
                    <Form onSubmit={this.onSaveClick.bind(this)}>
                        <input className="form-control mr-sm-2" type="text" defaultValue={journal} ref="editInput" />
                    </Form>
                </td>
            );
        }

        return (
            <td>
                {journal}
            </td>
        );
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
			<Col md ={2}>
                <td>
                    <button onClick={this.onSaveClick.bind(this)}className="btn btn-xs fa fa-check" id="savebtn"></button>
                    <button onClick={this.onCancelClick.bind(this)} className="btn btn-xs fa fa-ban" id="cancelbtn"></button>
                </td>
				
			</Col>
            );
        }

        return (
		<Col md ={2}>
            <td>
                <button onClick={this.onEditClick.bind(this)} className="btn btn-xs fa fa-pencil" id="editbtn"></button>
                <button type="button" className="btn btn-xs fa fa-times" id ="deletebtn" onClick={this.props.deleteJournal.bind(this, this.props.journal)}></button>
            </td>
			</Col>
        );
    }

    render() {
        return (
            <tr>
                {this.renderJournalSection()}
                {this.renderActionsSection()}
            </tr>
        );
    }

    onEditClick() {
        this.setState({ isEditing: true });
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }

    onSaveClick(event) {
        event.preventDefault();

        const oldJournal = this.props.journal;
        const newJournal = this.refs.editInput.value;
        this.props.saveJournal(oldJournal, newJournal);
        this.setState({ isEditing: false });
    }

}

export default JournalItem;