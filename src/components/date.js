import React, {Component} from 'react';
import Moment from 'moment';

class Date extends Component {
    render() {
        return ( 
            <div className="dateTitle">
                <h2>{Moment().format('dddd')}</h2>
                <p>{Moment().format('LL')}</p>
            </div>
        );
    }
}

export default Date;