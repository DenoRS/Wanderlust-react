import React, {Component} from 'react';
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
  Form,
  Row,
  Col,
  Jumbotron,
  Button,
  TextInput,
  TextArea
} from 'reactstrap';

import JournalItem from './JournalItem.js';


class JournalList extends Component {
	
  renderItems() {
        const props = _.omit(this.props, 'entries');

        return _.map(this.props.entries, (entry, index) => <JournalItem key={index} {...entry} {...props} />);
    }

 render() {
        return (
		<div className="tableList">
		<h2 id="titles"> Journal List </h2>
		
            <table>
               
                <tbody>
					{this.props.children}
                   
                </tbody>
            </table>
			
			<table>
               
                <tbody>
					
                    {this.renderItems()}
                </tbody>
            </table>
			
			 <Form className="form-inline mt-2 mt-md-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
			<Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Button>
        </Form>
		</div>
        );
    }

}


export default JournalList;