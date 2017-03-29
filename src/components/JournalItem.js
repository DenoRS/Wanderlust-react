import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

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
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={journal} ref="editInput" />
                    </form>
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
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>#x2713;</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
				
			
            );
        }

        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button type="button" className="btn btn-xs btn-danger img-circle" onClick={this.props.deleteJournal.bind(this, this.props.journal)}>Delete</button>
            </td>
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