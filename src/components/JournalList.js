import React, {Component} from 'react';
import _ from 'lodash';

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
                    {this.renderItems()}
                </tbody>
            </table>
		</div>
        );
    }

}


export default JournalList;